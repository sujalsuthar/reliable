import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import { COOKIE_NAME, verifySessionToken } from '@/lib/auth'

export async function requireAdminSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  const valid = await verifySessionToken(token)

  if (!valid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return null
}
