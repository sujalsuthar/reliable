import type { NextRequest } from 'next/server'

import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n/config'

export function getCountryFromRequest(request: NextRequest): string | null {
  const geo = (request as NextRequest & { geo?: { country?: string } }).geo
  return (
    request.headers.get('x-vercel-ip-country') ??
    request.headers.get('cf-ipcountry') ??
    geo?.country ??
    null
  )?.toUpperCase() ?? null
}

/** Site always defaults to English; users switch to Arabic manually. */
export function detectLocaleFromRequest(): Locale {
  return DEFAULT_LOCALE
}
