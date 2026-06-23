'use client'

import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import DivisionCard from '@/components/ui/DivisionCard'
import type { Division, DivisionType } from '@/lib/types'

interface DivisionsGridProps {
  divisions: Division[]
}

export default function DivisionsGrid({ divisions }: DivisionsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {divisions.map((division, index) => (
        <AnimateOnScroll key={division._id} delay={index * 0.1} className="w-full">
          <DivisionCard
            name={division.name}
            tagLabel={division.tagLabel ?? division.name}
            description={division.description ?? ''}
            bulletPoints={division.bulletPoints ?? []}
            type={(division.type ?? 'civil') as DivisionType}
          />
        </AnimateOnScroll>
      ))}
    </div>
  )
}
