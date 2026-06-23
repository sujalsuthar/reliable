'use client'

import { ExternalLink, MapPin } from 'lucide-react'
import { useState } from 'react'

import { GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_LINK } from '@/lib/brand'

interface ContactMapProps {
  title: string
  openInMapsLabel: string
  mapUnavailableLabel?: string
}

export default function ContactMap({
  title,
  openInMapsLabel,
  mapUnavailableLabel = 'View location on Google Maps',
}: ContactMapProps) {
  const [mapError, setMapError] = useState(false)

  return (
    <div className="mt-12">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-medium text-gray-900 md:text-2xl">{title}</h2>
        <a
          href={GOOGLE_MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="interactive inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          {openInMapsLabel}
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        </a>
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-100 shadow-card">
        {mapError ? (
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[280px] flex-col items-center justify-center gap-3 bg-gray-50 p-6 text-center sm:h-[360px] lg:h-[400px]"
          >
            <MapPin className="h-10 w-10 text-primary-500" aria-hidden />
            <span className="text-sm font-medium text-primary-700">{mapUnavailableLabel}</span>
          </a>
        ) : (
          <iframe
            src={GOOGLE_MAPS_EMBED_URL}
            title={title}
            className="h-[280px] w-full sm:h-[360px] lg:h-[400px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onError={() => setMapError(true)}
          />
        )}
      </div>
    </div>
  )
}
