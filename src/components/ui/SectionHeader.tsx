'use client'

import { clsx } from 'clsx'

import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import SectionLabel from '@/components/ui/SectionLabel'

interface SectionHeaderProps {
  label: string
  title: string
  description: string
  className?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({
  label,
  title,
  description,
  className = 'mb-12',
  align = 'center',
}: SectionHeaderProps) {
  const centered = align === 'center'

  return (
    <AnimateOnScroll
      direction="up"
      className={clsx(className, centered && 'text-center')}
    >
      <SectionLabel className={centered ? 'mx-auto' : undefined}>{label}</SectionLabel>
      <h2
        className={clsx(
          'section-title mt-4',
          centered && 'mx-auto',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={clsx(
            'section-subtitle',
            centered && 'mx-auto',
          )}
        >
          {description}
        </p>
      ) : null}
    </AnimateOnScroll>
  )
}
