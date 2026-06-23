import Link from 'next/link'

import ServiceCard from '@/components/ui/ServiceCard'

interface ServiceListingCardProps {
  title: string
  description: string
  icon: string
  slug: string
}

export default function ServiceListingCard({
  title,
  description,
  icon,
  slug,
}: ServiceListingCardProps) {
  return (
    <Link href={`/services/${slug}`} className="group block h-full w-full">
      <ServiceCard
        title={title}
        description={description}
        icon={icon}
        className="h-full p-8 transition group-hover:border-primary-200 group-hover:shadow-hover [&_p]:text-base"
      />
    </Link>
  )
}
