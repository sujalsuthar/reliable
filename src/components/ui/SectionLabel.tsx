import { clsx } from 'clsx'
import type { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  className?: string
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={clsx(
        'inline-block rounded-tag border border-primary-200 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary-600',
        className,
      )}
    >
      {children}
    </span>
  )
}
