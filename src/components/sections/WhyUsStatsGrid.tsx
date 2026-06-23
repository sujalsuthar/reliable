'use client'

import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import AnimatedStatCard from '@/components/ui/AnimatedStatCard'
import type { WhyStat } from '@/lib/types'

interface WhyUsStatsGridProps {
  stats: WhyStat[]
  variant?: 'light' | 'dark'
}

export default function WhyUsStatsGrid({
  stats,
  variant = 'light',
}: WhyUsStatsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
      {stats.map((stat, index) => (
        <AnimateOnScroll key={stat._id} delay={index * 0.1}>
          <AnimatedStatCard
            value={stat.value ?? ''}
            label={stat.label ?? ''}
            description={stat.description}
            variant={variant}
          />
        </AnimateOnScroll>
      ))}
    </div>
  )
}
