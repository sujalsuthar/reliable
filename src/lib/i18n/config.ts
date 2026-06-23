export const LOCALES = ['en', 'ar'] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'
export const LOCALE_COOKIE = 'reliable_locale'
export const LOCALE_MANUAL_COOKIE = 'reliable_locale_manual'
export const LOCALE_STORAGE_KEY = 'reliable_locale'
export const LOCALE_MANUAL_STORAGE_KEY = 'reliable_locale_manual'

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  ar: 'العربية',
}

export function isLocale(value: string | undefined | null): value is Locale {
  return value === 'en' || value === 'ar'
}

export function isRtl(locale: Locale): boolean {
  return locale === 'ar'
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'ar' : 'en'
}
