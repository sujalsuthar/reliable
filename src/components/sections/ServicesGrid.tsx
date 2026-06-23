'use client'

import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import ServiceCard from '@/components/ui/ServiceCard'
import type { ServiceListItem } from '@/lib/types'

interface ServicesGridProps {
  services: ServiceListItem[]
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <AnimateOnScroll key={service._id} delay={index * 0.1} className="w-full">
          <ServiceCard
            title={service.title}
            description={service.shortDescription ?? ''}
            icon={service.icon ?? 'Circle'}
          />
        </AnimateOnScroll>
      ))}
    </div>
  )
}
