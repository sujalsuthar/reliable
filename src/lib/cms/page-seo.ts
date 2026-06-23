export type PageSeoKey =
  | 'home'
  | 'about'
  | 'services'
  | 'projects'
  | 'blog'
  | 'contact'
  | 'careers'
  | 'divisions'
  | 'privacy'
  | 'terms'

export interface PageSeoFields {
  seoTitle?: string
  seoTitleAr?: string
  /** Alternate title for Open Graph / social sharing */
  seoTitleAlt?: string
  seoTitleAltAr?: string
  seoDescription?: string
  seoDescriptionAr?: string
  /** Alternate description for Open Graph / social sharing */
  seoDescriptionAlt?: string
  seoDescriptionAltAr?: string
  seoKeywords?: string
  seoKeywordsAr?: string
}

export interface PageSeoEntry extends PageSeoFields {
  key: PageSeoKey
  label: string
  path: string
}

export type PageSeoMap = Record<PageSeoKey, PageSeoEntry>

export const PAGE_SEO_KEYS: PageSeoKey[] = [
  'home',
  'about',
  'services',
  'projects',
  'blog',
  'contact',
  'careers',
  'divisions',
  'privacy',
  'terms',
]

export function createDefaultPageSeo(): PageSeoMap {
  return {
    home: {
      key: 'home',
      label: 'Homepage',
      path: '/',
      seoTitle: 'Reliable Company | Project Management & Engineering Services',
      seoTitleAlt: 'Integrated PMC & Engineering — Saudi Arabia',
      seoDescription:
        'Reliable Company delivers integrated project management consultancy and engineering services — FEED, design management, construction, commissioning, and operations across Saudi Arabia.',
      seoDescriptionAlt:
        'Project management and engineering excellence for desalination, oil & gas, water infrastructure, and industrial projects in KSA.',
      seoKeywords:
        'project management consultancy, engineering services, FEED, PMC, Saudi Arabia, Reliable Company, desalination, industrial plants',
    },
    about: {
      key: 'about',
      label: 'About Us',
      path: '/about',
      seoTitle: 'About Us | Reliable Company Engineering',
      seoDescription:
        'Learn about Reliable Company — integrated project management and engineering teams delivering complex industrial projects across Saudi Arabia.',
      seoKeywords: 'about Reliable Company, engineering company Saudi Arabia, PMC consultancy',
    },
    services: {
      key: 'services',
      label: 'Services Listing',
      path: '/services',
      seoTitle: 'Our Services | Project Management & Engineering',
      seoDescription:
        'Explore our project management consultancy and engineering services — FEED, PMC, design management, procurement, construction, commissioning, and operations.',
      seoKeywords:
        'engineering services, PMC services, FEED, construction management, commissioning, Saudi Arabia',
    },
    projects: {
      key: 'projects',
      label: 'Case Studies / Projects',
      path: '/projects',
      seoTitle: 'Case Studies & Projects | Reliable Company',
      seoDescription:
        'Portfolio of project management and engineering projects across desalination, oil & gas, water infrastructure, and industrial sectors.',
      seoKeywords: 'engineering projects, case studies, Saudi Arabia projects, PMC portfolio',
    },
    blog: {
      key: 'blog',
      label: 'Blog',
      path: '/blog',
      seoTitle: 'Blog | Engineering Insights',
      seoDescription:
        'Insights and updates from Reliable Company engineering and project management teams across Saudi Arabia.',
      seoKeywords: 'engineering blog, PMC insights, Saudi infrastructure news',
    },
    contact: {
      key: 'contact',
      label: 'Contact',
      path: '/contact',
      seoTitle: 'Contact Us | Reliable Company',
      seoDescription:
        'Contact Reliable Company for project management consultancy and engineering services in Jeddah and across Saudi Arabia.',
      seoKeywords: 'contact Reliable Company, engineering consultancy Jeddah, PMC contact',
    },
    careers: {
      key: 'careers',
      label: 'Careers',
      path: '/careers',
      seoTitle: 'Careers | Join Reliable Company',
      seoDescription:
        'Build your career with Reliable Company — project management and engineering teams across the Kingdom.',
      seoKeywords: 'engineering careers Saudi Arabia, PMC jobs, Reliable Company careers',
    },
    divisions: {
      key: 'divisions',
      label: 'Divisions',
      path: '/divisions',
      seoTitle: 'Our Divisions | PMC & Engineering',
      seoDescription:
        'Project Management Consultancy and Engineering Services — two integrated pillars for seamless project delivery.',
      seoKeywords: 'PMC division, engineering division, Reliable Company capabilities',
    },
    privacy: {
      key: 'privacy',
      label: 'Privacy Policy',
      path: '/privacy',
      seoTitle: 'Privacy Policy | Reliable Company',
      seoDescription: 'Privacy policy for Reliable Company engineering website.',
      seoKeywords: 'privacy policy, Reliable Company',
    },
    terms: {
      key: 'terms',
      label: 'Terms of Service',
      path: '/terms',
      seoTitle: 'Terms of Service | Reliable Company',
      seoDescription: 'Terms of service for Reliable Company engineering website.',
      seoKeywords: 'terms of service, Reliable Company',
    },
  }
}

export function mergePageSeo(stored?: Partial<PageSeoMap>): PageSeoMap {
  const defaults = createDefaultPageSeo()
  const merged = { ...defaults }

  if (!stored) return merged

  for (const key of PAGE_SEO_KEYS) {
    merged[key] = { ...defaults[key], ...stored[key] }
  }

  return merged
}
