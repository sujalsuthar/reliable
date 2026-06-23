import { NextResponse } from 'next/server'

import { requireAdminSession } from '@/lib/cms/api-auth'
import { getStore } from '@/lib/cms/store'

export async function GET() {
  const authError = await requireAdminSession()
  if (authError) return authError

  const store = await getStore()
  return NextResponse.json({ store })
}
