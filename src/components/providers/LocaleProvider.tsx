'use client'

import { useRouter } from 'next/navigation'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import {
  isLocale,
  LOCALE_MANUAL_STORAGE_KEY,
  LOCALE_STORAGE_KEY,
  type Locale,
} from '@/lib/i18n/config'
import { getMessages, type Messages } from '@/lib/i18n/messages'

interface LocaleContextValue {
  locale: Locale
  messages: Messages
  isPending: boolean
  toggleLocale: () => Promise<void>
  setLocale: (locale: Locale) => Promise<void>
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

interface LocaleProviderProps {
  locale: Locale
  children: ReactNode
}

function applyDocumentLocale(locale: Locale) {
  document.documentElement.lang = locale
  document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
}

export function LocaleProvider({ locale: initialLocale, children }: LocaleProviderProps) {
  const router = useRouter()
  const [locale, setLocaleState] = useState<Locale>(initialLocale)
  const [isPending, setIsPending] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  // Sync server locale → client
  useEffect(() => {
    setLocaleState(initialLocale)
    applyDocumentLocale(initialLocale)
  }, [initialLocale])

  // On mount: sync localStorage preference to server if user manually chose before
  useEffect(() => {
    setHydrated(true)
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
    const manual = localStorage.getItem(LOCALE_MANUAL_STORAGE_KEY) === '1'

    if (manual && isLocale(stored) && stored !== initialLocale) {
      void (async () => {
        setIsPending(true)
        try {
          await fetch('/api/locale', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ locale: stored, manual: true }),
          })
          setLocaleState(stored)
          applyDocumentLocale(stored)
          router.refresh()
        } finally {
          setIsPending(false)
        }
      })()
    }
  }, [initialLocale, router])

  const setLocale = useCallback(
    async (next: Locale) => {
      if (next === locale && hydrated) return
      setIsPending(true)
      try {
        await fetch('/api/locale', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ locale: next, manual: true }),
        })
        localStorage.setItem(LOCALE_STORAGE_KEY, next)
        localStorage.setItem(LOCALE_MANUAL_STORAGE_KEY, '1')
        setLocaleState(next)
        applyDocumentLocale(next)
        router.refresh()
      } finally {
        setIsPending(false)
      }
    },
    [locale, hydrated, router],
  )

  const toggleLocale = useCallback(async () => {
    await setLocale(locale === 'en' ? 'ar' : 'en')
  }, [locale, setLocale])

  const value = useMemo(
    () => ({
      locale,
      messages: getMessages(locale),
      isPending,
      toggleLocale,
      setLocale,
    }),
    [locale, isPending, toggleLocale, setLocale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return ctx
}
