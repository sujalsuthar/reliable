import { clsx } from 'clsx'

interface StatusBadgeProps {
  status: string
}

const styles: Record<string, string> = {
  active: 'bg-emerald-50 text-emerald-700',
  published: 'bg-emerald-50 text-emerald-700',
  inactive: 'bg-gray-100 text-gray-600',
  draft: 'bg-gray-100 text-gray-600',
  new: 'bg-amber-50 text-amber-700',
  reviewed: 'bg-blue-50 text-blue-700',
  archived: 'bg-gray-100 text-gray-500',
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium capitalize',
        styles[status] ?? 'bg-gray-100 text-gray-600',
      )}
    >
      <span
        className={clsx(
          'h-1.5 w-1.5 rounded-full',
          status === 'active' || status === 'published'
            ? 'bg-emerald-500'
            : status === 'new'
              ? 'bg-amber-500'
              : 'bg-gray-400',
        )}
      />
      {status}
    </span>
  )
}
