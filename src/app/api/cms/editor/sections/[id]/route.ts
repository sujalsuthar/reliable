import { NextResponse } from 'next/server'

import { requireAdminSession } from '@/lib/cms/api-auth'
import { removeHomepageSection } from '@/lib/cms/store'

interface RouteParams {
  params: { id: string }
}

export async function DELETE(_request: Request, { params }: RouteParams) {
  const authError = await requireAdminSession()
  if (authError) return authError

  const deleted = await removeHomepageSection(params.id)
  if (!deleted) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  return NextResponse.json({ success: true })
}
