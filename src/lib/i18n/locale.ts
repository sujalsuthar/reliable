import { cookies } from 'next/headers'

import {
  DEFAULT_LOCALE,
  isLocale,
  LOCALE_COOKIE,
  type Locale,
} from '@/lib/i18n/config'

export async function getLocale(): Promise<Locale> {
  try {
    const value = cookies().get(LOCALE_COOKIE)?.value
    return isLocale(value) ? value : DEFAULT_LOCALE
  } catch {
    // Static generation / build time — no request cookies available
    return DEFAULT_LOCALE
  }
}
