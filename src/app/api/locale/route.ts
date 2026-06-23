import { NextResponse } from 'next/server'

import {
  DEFAULT_LOCALE,
  isLocale,
  LOCALE_COOKIE,
  LOCALE_MANUAL_COOKIE,
  type Locale,
} from '@/lib/i18n/config'

const COOKIE_OPTS = {
  path: '/',
  maxAge: 60 * 60 * 24 * 365,
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
}

export async function POST(request: Request) {
  let locale: Locale = DEFAULT_LOCALE
  let manual = true

  try {
    const body = (await request.json()) as { locale?: string; manual?: boolean }
    if (isLocale(body.locale)) {
      locale = body.locale
    }
    if (body.manual === false) manual = false
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const response = NextResponse.json({ ok: true, locale, manual })
  response.cookies.set(LOCALE_COOKIE, locale, COOKIE_OPTS)

  if (manual) {
    response.cookies.set(LOCALE_MANUAL_COOKIE, '1', COOKIE_OPTS)
  } else {
    response.cookies.delete(LOCALE_MANUAL_COOKIE)
  }

  return response
}
