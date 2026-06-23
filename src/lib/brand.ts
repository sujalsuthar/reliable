export const LOGO_PATH = '/logo.png'
export const LOGO_ALT = 'Reliable Company — شركة ريلايبل'

export const COMPANY_PHONE = '+966 56 391 3902'
export const COMPANY_EMAIL = 'info@reliablecompany.sa'
export const COMPANY_WEBSITE = 'https://reliablecompany.sa'
export const COMPANY_ADDRESS =
  '8648, Prince Muteb Street, Al Aziziyah District, Jeddah, Saudi Arabia. P.O. Box: 23342'
export const COMPANY_ADDRESS_AR =
  '8648، شارع الأمير متعب، حي العزيزية، جدة، المملكة العربية السعودية. ص.ب: 23342'
export const DIVISION_TAGLINE = 'A division of Reliable Company'
export const DIVISION_TAGLINE_AR = 'قسم من شركة ريلايبل'
export const CERTIFICATIONS_FOOTER_IMAGE = '/certifications-footer.png'
export const COPYRIGHT_TEXT = '© 2026 Reliable Company. All rights reserved.'

export function phoneTelHref(phone: string = COMPANY_PHONE): string {
  return `tel:${phone.replace(/\s/g, '')}`
}

export const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.6953010221246!2d39.210085074728774!3d21.558766369365106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e51c81d1a76b71%3A0x2482b35fae751738!2sReliable%20company!5e0!3m2!1sen!2sin!4v1781274807482!5m2!1sen!2sin'

export const GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/place/Reliable+company/@21.5587664,39.2126601,17z'

export const DEFAULT_HERO = {
  eyebrow: 'PROJECT MANAGEMENT & ENGINEERING',
  headlinePrefix: 'Collaborate, Communicate,',
  headlineHighlight: 'Complete.',
  subheadline:
    'Reliable Company delivers integrated Project Management consultancy and Engineering services — from FEED and design management through construction, commissioning, operations, and plant optimization across Saudi Arabia.',
  primaryButtonText: 'Explore Our Services',
  primaryButtonLink: '/services',
  secondaryButtonText: 'Contact Us',
  secondaryButtonLink: '/contact',
  stats: [
    { _key: '1', number: '100+', label: 'Years Combined Experience' },
    { _key: '2', number: '500+', label: 'Projects Delivered' },
    { _key: '3', number: '2016', label: 'Founded in UAE' },
    { _key: '4', number: '2023', label: 'Expanded to KSA' },
  ],
} as const

export const SERVICE_MENU = [
  {
    title: 'Engineering Services',
    tagline: 'FEED • DESIGN • PROCUREMENT',
    href: '/services',
    links: [
      { label: 'Front-End Engineering (FEED)', href: '/services/front-end-engineering-feed' },
      { label: 'Design Management', href: '/services/detailed-engineering-design-management' },
      { label: 'Procurement Management', href: '/services/procurement-management' },
      { label: 'Commissioning Management', href: '/services/commissioning-management' },
      { label: 'Operations & Maintenance', href: '/services/operations-maintenance' },
      { label: 'Plant Optimization', href: '/services/industrial-plant-optimization' },
    ],
  },
  {
    title: 'Project Management',
    tagline: 'PMC • PROGRAM • CONSTRUCTION',
    href: '/services',
    links: [
      { label: 'Project Management Consultancy', href: '/services/project-management-consultancy' },
      { label: 'Program Management', href: '/services/program-management' },
      { label: 'Construction Management', href: '/services/construction-management' },
    ],
  },
] as const
