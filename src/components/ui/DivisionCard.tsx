import { clsx } from 'clsx'
import { CheckCircle } from 'lucide-react'

import { divisionStyles } from '@/lib/division-styles'
import type { DivisionType } from '@/lib/types'

interface DivisionCardProps {
  name: string
  tagLabel: string
  description: string
  bulletPoints: string[]
  type: DivisionType
  className?: string
}

export default function DivisionCard({
  name,
  tagLabel,
  description,
  bulletPoints,
  type,
  className,
}: DivisionCardProps) {
  const styles = divisionStyles[type]

  return (
    <article
      className={clsx(
        'card-base h-full w-full border-l-4 p-6 sm:p-8',
        styles.border,
        className,
      )}
    >
      <span
        className={clsx(
          'mb-4 inline-block rounded-tag px-3 py-1 text-xs font-medium',
          styles.tag,
        )}
      >
        {tagLabel}
      </span>
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{name}</h3>
      <p className="mb-4 text-sm leading-relaxed text-gray-600">{description}</p>
      {bulletPoints.length > 0 && (
        <ul className="space-y-2">
          {bulletPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 text-sm text-gray-700"
            >
              <CheckCircle
                className={clsx('mt-0.5 h-4 w-4 shrink-0', styles.icon)}
                aria-hidden
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
