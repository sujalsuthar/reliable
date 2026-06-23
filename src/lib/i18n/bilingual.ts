import type { Locale } from '@/lib/i18n/config'

/** Convert a store field path to its Arabic counterpart path */
export function toArPath(path: string): string {
  if (path.endsWith('Ar')) return path
  const parts = path.split('.')
  const last = parts[parts.length - 1]
  parts[parts.length - 1] = `${last}Ar`
  return parts.join('.')
}

export function isTranslatableFieldType(type: string): boolean {
  return type === 'text' || type === 'textarea' || type === 'richtext'
}

export function resolveBilingual(
  en: string | undefined,
  ar: string | undefined | null,
  locale: Locale,
): string {
  if (locale === 'ar' && ar?.trim()) return ar.trim()
  return en ?? ''
}

export function bilingualFieldKeys(baseKey: string): { en: string; ar: string } {
  return { en: baseKey, ar: `${baseKey}Ar` }
}
