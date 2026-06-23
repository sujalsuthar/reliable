'use client'

import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import ServiceListingCard from '@/components/ui/ServiceListingCard'
import type { ServiceListItem } from '@/lib/types'

interface ServicesListingGridProps {
  services: ServiceListItem[]
}

export default function ServicesListingGrid({
  services,
}: ServicesListingGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <AnimateOnScroll key={service._id} delay={index * 0.1} className="w-full">
          <ServiceListingCard
            title={service.title}
            description={service.shortDescription ?? ''}
            icon={service.icon ?? 'Circle'}
            slug={service.slug?.current ?? service._id}
          />
        </AnimateOnScroll>
      ))}
    </div>
  )
}
