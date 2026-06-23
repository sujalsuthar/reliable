import { NextRequest, NextResponse } from 'next/server'

import { requireAdminSession } from '@/lib/cms/api-auth'
import { patchStoreField } from '@/lib/cms/store'

export async function PATCH(request: NextRequest) {
  const authError = await requireAdminSession()
  if (authError) return authError

  try {
    const body = (await request.json()) as { path?: string; value?: unknown }
    if (!body.path) {
      return NextResponse.json({ error: 'path is required' }, { status: 400 })
    }

    const store = await patchStoreField(body.path, body.value)
    return NextResponse.json({ store })
  } catch {
    return NextResponse.json({ error: 'Failed to update field' }, { status: 400 })
  }
}
