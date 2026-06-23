'use client'

import { Building2 } from 'lucide-react'
import { useEffect } from 'react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-gray-50 px-4 py-20 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-md bg-primary-600">
        <Building2 className="h-8 w-8 text-white" aria-hidden />
      </div>
      <h1 className="text-2xl font-medium text-gray-900 md:text-3xl">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-md text-gray-600">
        We encountered an unexpected error while loading this page. Please try
        again or return to the homepage.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
        >
          Try again
        </button>
        <a
          href="/"
          className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-primary-600 px-6 py-3 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-50"
        >
          Go to homepage
        </a>
      </div>
    </div>
  )
}
