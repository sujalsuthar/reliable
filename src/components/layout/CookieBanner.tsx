'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { useLocale } from '@/components/providers/LocaleProvider'

const STORAGE_KEY = 'reliable-cookie-consent'

export default function CookieBanner() {
  const { messages } = useLocale()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY)
    if (!accepted) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 start-4 end-4 z-[70] mx-auto max-w-3xl md:bottom-6">
      <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-mega sm:flex-row sm:items-center">
        <p className="text-sm leading-relaxed text-gray-600">
          {messages.cookie.text}{' '}
          <Link href="/privacy" className="text-primary-600 hover:underline">
            {messages.cookie.privacy}
          </Link>{' '}
          {messages.cookie.and}
        </p>
        <button
          type="button"
          onClick={accept}
          className="interactive inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-md bg-primary-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-primary-700"
        >
          {messages.cookie.accept}
        </button>
      </div>
    </div>
  )
}
