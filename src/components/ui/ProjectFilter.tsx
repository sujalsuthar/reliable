'use client'

import { clsx } from 'clsx'
import { Search } from 'lucide-react'

import { useLocale } from '@/components/providers/LocaleProvider'

export type ProjectFilterType = 'all' | 'civil' | 'electrical' | 'mechanical'

interface ProjectFilterProps {
  activeFilter: ProjectFilterType
  onFilterChange: (filter: ProjectFilterType) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

export default function ProjectFilter({
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
}: ProjectFilterProps) {
  const { messages } = useLocale()
  const f = messages.projectFilter

  const filters: { label: string; value: ProjectFilterType }[] = [
    { label: f.all, value: 'all' },
    { label: f.civil, value: 'civil' },
    { label: f.electrical, value: 'electrical' },
    { label: f.mechanical, value: 'mechanical' },
  ]

  return (
    <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => onFilterChange(filter.value)}
            className={clsx(
              'min-h-[44px] rounded-lg px-4 py-2 text-sm font-medium transition-colors',
              activeFilter === filter.value
                ? 'bg-primary-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="relative w-full lg:max-w-xs">
        <Search
          className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
          aria-hidden
        />
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={f.search}
          className="min-h-[44px] w-full rounded-lg border border-gray-200 bg-white py-2 ps-10 pe-4 text-sm text-gray-900 placeholder:text-gray-400"
        />
      </div>
    </div>
  )
}
