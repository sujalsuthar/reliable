import { NextRequest, NextResponse } from 'next/server'

import { requireAdminSession } from '@/lib/cms/api-auth'
import { COLLECTION_CONFIGS } from '@/lib/cms/collections'
import { resolveCollectionPath } from '@/lib/cms/navigation'
import { formValuesToItem } from '@/lib/cms/transform'
import type { CmsCollection } from '@/lib/cms/types'
import {
  deleteCollectionItem,
  getCollectionItem,
  updateCollectionItem,
} from '@/lib/cms/store'

interface RouteParams {
  params: { collection: string; id: string }
}

export async function GET(_request: NextRequest, { params }: RouteParams) {
  const authError = await requireAdminSession()
  if (authError) return authError

  const collectionKey = resolveCollectionPath(params.collection)
  const config = collectionKey ? COLLECTION_CONFIGS[collectionKey] : null
  if (!config) {
    return NextResponse.json({ error: 'Unknown collection' }, { status: 404 })
  }

  const item = await getCollectionItem(config.key, params.id)
  if (!item) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  return NextResponse.json({ item })
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  const authError = await requireAdminSession()
  if (authError) return authError

  const collectionKey = resolveCollectionPath(params.collection)
  const config = collectionKey ? COLLECTION_CONFIGS[collectionKey] : null
  if (!config) {
    return NextResponse.json({ error: 'Unknown collection' }, { status: 404 })
  }

  try {
    const body = (await request.json()) as Record<string, unknown>
    const existing = await getCollectionItem(config.key, params.id)

    if (!existing) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    const payload = formValuesToItem(config.key, { ...existing, ...body })
    const item = await updateCollectionItem(
      config.key as CmsCollection,
      params.id,
      payload,
    )

    return NextResponse.json({ item })
  } catch (error) {
    console.error('[cms] PUT failed:', error)
    const message =
      error instanceof Error ? error.message : 'Failed to update item'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}

export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  const authError = await requireAdminSession()
  if (authError) return authError

  const collectionKey = resolveCollectionPath(params.collection)
  const config = collectionKey ? COLLECTION_CONFIGS[collectionKey] : null
  if (!config) {
    return NextResponse.json({ error: 'Unknown collection' }, { status: 404 })
  }

  const deleted = await deleteCollectionItem(config.key, params.id)
  if (!deleted) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  return NextResponse.json({ success: true })
}
