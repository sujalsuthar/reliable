import { NextRequest, NextResponse } from 'next/server'

import { requireAdminSession } from '@/lib/cms/api-auth'
import { mergePageSeo, type PageSeoMap } from '@/lib/cms/page-seo'
import { blocksToText, textToBlocks } from '@/lib/cms/text'
import type { CmsSingleton } from '@/lib/cms/types'
import { getStore, saveStore } from '@/lib/cms/store'

interface RouteParams {
  params: { name: string }
}

const VALID_SINGLETONS: CmsSingleton[] = ['siteSettings', 'hero', 'pages', 'pageSeo']

export async function GET(_request: NextRequest, { params }: RouteParams) {
  const authError = await requireAdminSession()
  if (authError) return authError

  if (!VALID_SINGLETONS.includes(params.name as CmsSingleton)) {
    return NextResponse.json({ error: 'Unknown singleton' }, { status: 404 })
  }

  const store = await getStore()

  if (params.name === 'pages') {
    return NextResponse.json({
      data: {
        aboutTitle: store.pages.about.title,
        aboutContent: blocksToText(store.pages.about.content),
        privacyTitle: store.pages.privacy.title,
        privacyContent: blocksToText(store.pages.privacy.content),
        termsTitle: store.pages.terms.title,
        termsContent: blocksToText(store.pages.terms.content),
      },
    })
  }

  if (params.name === 'pageSeo') {
    return NextResponse.json({ data: mergePageSeo(store.pageSeo) })
  }

  if (params.name === 'hero') {
    return NextResponse.json({ data: store.hero })
  }

  return NextResponse.json({ data: store.siteSettings })
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  const authError = await requireAdminSession()
  if (authError) return authError

  if (!VALID_SINGLETONS.includes(params.name as CmsSingleton)) {
    return NextResponse.json({ error: 'Unknown singleton' }, { status: 404 })
  }

  try {
    const body = await request.json()
    const store = await getStore()

    if (params.name === 'pages') {
      store.pages = {
        about: {
          ...store.pages.about,
          title: body.aboutTitle ?? store.pages.about.title,
          content: textToBlocks(String(body.aboutContent ?? '')),
        },
        privacy: {
          ...store.pages.privacy,
          title: body.privacyTitle ?? store.pages.privacy.title,
          content: textToBlocks(String(body.privacyContent ?? '')),
        },
        terms: {
          ...store.pages.terms,
          title: body.termsTitle ?? store.pages.terms.title,
          content: textToBlocks(String(body.termsContent ?? '')),
        },
      }
    } else if (params.name === 'pageSeo') {
      store.pageSeo = mergePageSeo(body as PageSeoMap)
    } else if (params.name === 'hero') {
      store.hero = { ...store.hero, ...body }
    } else {
      store.siteSettings = { ...store.siteSettings, ...body }
    }

    await saveStore(store)
    return NextResponse.json({ data: store[params.name as CmsSingleton] })
  } catch {
    return NextResponse.json({ error: 'Failed to update' }, { status: 400 })
  }
}
