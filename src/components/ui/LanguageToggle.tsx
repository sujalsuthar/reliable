'use client'

import { clsx } from 'clsx'
import { Languages, Loader2 } from 'lucide-react'

import { useLocale } from '@/components/providers/LocaleProvider'

interface LanguageToggleProps {
  className?: string
  size?: 'sm' | 'md'
}

export default function LanguageToggle({ className, size = 'md' }: LanguageToggleProps) {
  const { locale, messages, isPending, toggleLocale } = useLocale()

  const label =
    locale === 'en' ? messages.nav.switchToArabic : messages.nav.switchToEnglish

  return (
    <button
      type="button"
      onClick={() => void toggleLocale()}
      disabled={isPending}
      className={clsx(
        'interactive inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white font-medium text-gray-700',
        'transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700',
        'active:scale-[0.97] disabled:cursor-wait disabled:opacity-70',
        size === 'sm' ? 'h-9 px-3.5 text-sm' : 'h-10 px-4 text-sm',
        className,
      )}
      aria-label={locale === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      {isPending ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
      ) : (
        <Languages className="h-4 w-4 shrink-0 text-gray-500" aria-hidden />
      )}
      <span>{label}</span>
    </button>
  )
}
