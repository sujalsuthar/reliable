import type { DivisionType } from '@/lib/types'

/** Unified corporate-blue palette for all divisions (matches reliablecompany.sa mono-blue theme) */
export const divisionStyles: Record<
  DivisionType,
  { border: string; tag: string; icon: string; bg: string }
> = {
  civil: {
    border: 'border-l-primary-600',
    tag: 'bg-primary-50 text-primary-700',
    icon: 'text-primary-600',
    bg: 'bg-primary-100',
  },
  electrical: {
    border: 'border-l-primary-500',
    tag: 'bg-primary-50 text-primary-600',
    icon: 'text-primary-500',
    bg: 'bg-primary-50',
  },
  mechanical: {
    border: 'border-l-primary-400',
    tag: 'bg-primary-50 text-primary-600',
    icon: 'text-primary-400',
    bg: 'bg-primary-50',
  },
  it: {
    border: 'border-l-accent-400',
    tag: 'bg-primary-50 text-accent-500',
    icon: 'text-accent-400',
    bg: 'bg-primary-50',
  },
}
