import PageHero, { type BreadcrumbItem } from '@/components/ui/PageHero'
import { getPageHeroImage } from '@/lib/content'
import { getLocale } from '@/lib/i18n/locale'
import { getMessages } from '@/lib/i18n/messages'
import type { PageHeroKey } from '@/lib/page-heroes'
import type { ReactNode } from 'react'

interface CmsPageHeroProps {
  pageKey: PageHeroKey
  title: string
  description?: ReactNode
  breadcrumbs: BreadcrumbItem[]
  className?: string
}

export default async function CmsPageHero({
  pageKey,
  title,
  description,
  breadcrumbs,
  className,
}: CmsPageHeroProps) {
  const [imageUrl, locale] = await Promise.all([getPageHeroImage(pageKey), getLocale()])
  const messages = getMessages(locale)

  return (
    <PageHero
      title={title}
      description={description}
      breadcrumbs={breadcrumbs}
      imageUrl={imageUrl}
      eyebrow={messages.pageHero.badge}
      className={className}
    />
  )
}
