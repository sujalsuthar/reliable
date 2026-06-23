import { NextRequest, NextResponse } from 'next/server'

import { requireAdminSession } from '@/lib/cms/api-auth'
import type { SectionType } from '@/lib/cms/editor/types'
import {
  addHomepageSection,
  duplicateHomepageSection,
  updateHomepageSections,
} from '@/lib/cms/store'

export async function PUT(request: NextRequest) {
  const authError = await requireAdminSession()
  if (authError) return authError

  try {
    const body = (await request.json()) as {
      sections?: { id: string; type: SectionType; visible: boolean }[]
    }
    if (!body.sections) {
      return NextResponse.json({ error: 'sections required' }, { status: 400 })
    }

    const sections = await updateHomepageSections(body.sections)
    return NextResponse.json({ sections })
  } catch {
    return NextResponse.json({ error: 'Failed to update sections' }, { status: 400 })
  }
}

export async function POST(request: NextRequest) {
  const authError = await requireAdminSession()
  if (authError) return authError

  try {
    const body = (await request.json()) as {
      action?: 'add' | 'duplicate'
      type?: SectionType
      id?: string
    }

    if (body.action === 'duplicate' && body.id) {
      const section = await duplicateHomepageSection(body.id)
      if (!section) {
        return NextResponse.json({ error: 'Section not found' }, { status: 404 })
      }
      return NextResponse.json({ section })
    }

    if (body.type) {
      const section = await addHomepageSection(body.type)
      return NextResponse.json({ section }, { status: 201 })
    }

    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  } catch {
    return NextResponse.json({ error: 'Failed to add section' }, { status: 400 })
  }
}
