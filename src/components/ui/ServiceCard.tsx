'use client'

import { clsx } from 'clsx'
import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  className?: string
}

function getLucideIcon(name: string): LucideIcon {
  const icons = LucideIcons as unknown as Record<string, LucideIcon>
  return icons[name] ?? LucideIcons.Circle
}

export default function ServiceCard({
  title,
  description,
  icon,
  className,
}: ServiceCardProps) {
  const Icon = getLucideIcon(icon)

  return (
    <article
      className={clsx(
        'card-base group w-full p-6 hover:border-primary-200 sm:p-8',
        className,
      )}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </article>
  )
}
