import { clsx } from 'clsx'
import type { ReactNode } from 'react'

interface StatCardProps {
  value: ReactNode
  label: string
  description?: string
  className?: string
  variant?: 'light' | 'dark'
}

export default function StatCard({
  value,
  label,
  description,
  className,
  variant = 'light',
}: StatCardProps) {
  const isDark = variant === 'dark'

  return (
    <div className={clsx('text-center', className)}>
      <p
        className={clsx(
          'text-4xl font-semibold sm:text-5xl',
          isDark ? 'text-accent-400' : 'text-primary-600',
        )}
      >
        {value}
      </p>
      <p
        className={clsx(
          'mt-2 text-sm font-medium',
          isDark ? 'text-white/80' : 'text-gray-700',
        )}
      >
        {label}
      </p>
      {description && (
        <p
          className={clsx(
            'mt-1 text-sm',
            isDark ? 'text-white/50' : 'text-gray-500',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
