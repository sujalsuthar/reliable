import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

import ServicesGrid from '@/components/sections/ServicesGrid'
import SectionHeader from '@/components/ui/SectionHeader'
import { getSectionContent, getServices } from '@/lib/content'
import { getLocale } from '@/lib/i18n/locale'
import { getMessages } from '@/lib/i18n/messages'

function ServiceCardSkeleton() {
  return (
    <div className="card-base animate-pulse p-6">
      <div className="mb-4 h-12 w-12 rounded-xl bg-primary-100" />
      <div className="mb-2 h-5 w-3/4 rounded bg-gray-200" />
      <div className="space-y-2">
        <div className="h-3 w-full rounded bg-gray-200" />
        <div className="h-3 w-5/6 rounded bg-gray-200" />
      </div>
    </div>
  )
}

export default async function Services() {
  const locale = await getLocale()
  const ui = getMessages(locale)
  const [services, header] = await Promise.all([
    getServices(),
    getSectionContent('services'),
  ])
  const hasServices = services.length > 0

  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <SectionHeader
          label={header?.label ?? 'Services'}
          title={header?.title ?? 'Integrated Engineering Services'}
          description={
            header?.description ??
            'From structural design to IT infrastructure, we deliver end-to-end engineering solutions tailored to complex projects across Saudi Arabia.'
          }
        />

        {hasServices ? (
          <ServicesGrid services={services} />
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <ServiceCardSkeleton key={index} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="btn-primary inline-flex gap-2 px-6"
          >
            {ui.sections.viewAllServices}
            <ChevronRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
