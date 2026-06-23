import type { Metadata } from 'next'

import type { PageSeoKey } from '@/lib/cms/page-seo'
import type { Locale } from '@/lib/i18n/config'
import { getLocale } from '@/lib/i18n/locale'
import { getPageSeoEntry } from '@/lib/content'

const BASE_URL = 'https://engineering.reliablecompany.sa'
const SITE_NAME = 'Reliable Company'
const SITE_NAME_AR = 'شركة ريلايبل'
const DEFAULT_OG_IMAGE = '/og-default.png'
const DEFAULT_DESCRIPTION =
  'Reliable Company delivers integrated project management consultancy and engineering services for complex projects across Saudi Arabia.'
const DEFAULT_DESCRIPTION_AR =
  'تقدم شركة ريلايبل استشارات إدارة المشاريع المتكاملة والهندسة للمشاريع المعقدة في المملكة العربية السعودية.'

export interface SEOOptions {
  title: string
  titleAr?: string
  titleAlt?: string
  titleAltAr?: string
  description?: string
  descriptionAr?: string
  descriptionAlt?: string
  descriptionAltAr?: string
  keywords?: string
  keywordsAr?: string
  image?: string
  path?: string
  absoluteTitle?: boolean
  locale?: Locale
}

export function generateMetadata(options: SEOOptions): Metadata {
  const {
    title,
    titleAr,
    titleAlt,
    titleAltAr,
    description = DEFAULT_DESCRIPTION,
    descriptionAr = DEFAULT_DESCRIPTION_AR,
    descriptionAlt,
    descriptionAltAr,
    keywords,
    keywordsAr,
    image,
    path = '/',
    absoluteTitle = false,
    locale = 'en',
  } = options

  const isAr = locale === 'ar'
  const resolvedTitle = isAr && titleAr?.trim() ? titleAr : title
  const resolvedDescription = isAr && descriptionAr?.trim() ? descriptionAr : description
  const resolvedKeywords = isAr && keywordsAr?.trim() ? keywordsAr : keywords
  const resolvedOgTitle =
    isAr && titleAltAr?.trim() ? titleAltAr : titleAlt?.trim() ? titleAlt : resolvedTitle
  const resolvedOgDescription =
    isAr && descriptionAltAr?.trim()
      ? descriptionAltAr
      : descriptionAlt?.trim()
        ? descriptionAlt
        : resolvedDescription
  const siteName = isAr ? SITE_NAME_AR : SITE_NAME

  const canonicalPath = path.startsWith('/') ? path : `/${path}`
  const canonicalUrl = `${BASE_URL}${canonicalPath === '/' ? '' : canonicalPath}`
  const ogImage = image ?? DEFAULT_OG_IMAGE
  const openGraphTitle = absoluteTitle ? resolvedOgTitle : `${resolvedOgTitle} | ${siteName}`

  return {
    title: absoluteTitle ? { absolute: resolvedTitle } : resolvedTitle,
    description: resolvedDescription,
    keywords: resolvedKeywords,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: canonicalUrl,
        ar: canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title: openGraphTitle,
      description: resolvedOgDescription,
      url: canonicalUrl || BASE_URL,
      siteName,
      locale: isAr ? 'ar_SA' : 'en_US',
      alternateLocale: isAr ? ['en_US'] : ['ar_SA'],
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: openGraphTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraphTitle,
      description: resolvedOgDescription,
      images: [ogImage],
    },
  }
}

export async function generateLocalizedMetadata(
  options: Omit<SEOOptions, 'locale'>,
): Promise<Metadata> {
  const locale = await getLocale()
  return generateMetadata({ ...options, locale })
}

export async function generateCmsPageMetadata(
  key: PageSeoKey,
  overrides?: Partial<SEOOptions>,
): Promise<Metadata> {
  const locale = await getLocale()
  const entry = await getPageSeoEntry(key)

  return generateMetadata({
    title: entry.seoTitle ?? '',
    titleAr: entry.seoTitleAr,
    titleAlt: entry.seoTitleAlt,
    titleAltAr: entry.seoTitleAltAr,
    description: entry.seoDescription,
    descriptionAr: entry.seoDescriptionAr,
    descriptionAlt: entry.seoDescriptionAlt,
    descriptionAltAr: entry.seoDescriptionAltAr,
    keywords: entry.seoKeywords,
    keywordsAr: entry.seoKeywordsAr,
    path: entry.path,
    absoluteTitle: key === 'home',
    locale,
    ...overrides,
  })
}

export { BASE_URL, DEFAULT_DESCRIPTION, SITE_NAME }
