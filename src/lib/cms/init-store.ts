import type { CmsStore } from '@/lib/cms/types'
import {
  createSectionInstance,
  DEFAULT_HOMEPAGE_SECTIONS,
} from '@/lib/cms/editor/sections'
import { blocks, blocksToText } from '@/lib/cms/text'
import {
  CERTIFICATIONS_FOOTER_IMAGE,
  COMPANY_ADDRESS,
  COPYRIGHT_TEXT,
  DIVISION_TAGLINE,
  DIVISION_TAGLINE_AR,
  LOGO_PATH,
} from '@/lib/brand'
import {
  DEFAULT_MEGA_MENU_IMAGE,
  DEFAULT_PAGE_HERO_IMAGES,
} from '@/lib/page-heroes'
import {
  CTA_AR,
  FOOTER_AR,
  FOOTER_CONTACT_AR,
  GLOBAL_AR,
  NAVBAR_AR,
  SECTION_CONTENT_AR,
} from '@/lib/i18n/cms-ar'
import { createDefaultPageSeo } from '@/lib/cms/page-seo'
import { applyServiceDetailExtras } from '@/lib/service-seed-detail'
import {
  SEED_ABOUT_PAGE,
  SEED_DIVISIONS,
  SEED_HERO,
  SEED_PRIVACY_PAGE,
  SEED_PROJECTS,
  SEED_SERVICES,
  SEED_SITE_SETTINGS,
  SEED_TEAM,
  SEED_TERMS_PAGE,
  SEED_WHY_STATS,
} from '@/lib/seed-data'

export function createInitialStore(): CmsStore {
  return {
    profileVersion: 4,
    siteSettings: SEED_SITE_SETTINGS,
    navbar: {
      consultationText: 'Get Consultation',
      consultationTextAr: NAVBAR_AR.consultationText,
      consultationLink: '/contact',
      arabicLabel: 'عربي',
      mainLinks: [
        { label: 'Home', labelAr: NAVBAR_AR.mainLinks[0].label, href: '/' },
        { label: 'About', labelAr: NAVBAR_AR.mainLinks[1].label, href: '/about' },
        { label: 'Career', labelAr: NAVBAR_AR.mainLinks[2].label, href: '/careers' },
        { label: 'Contact', labelAr: NAVBAR_AR.mainLinks[3].label, href: '/contact' },
      ],
      resourcesLinks: [
        { label: 'Blog', labelAr: NAVBAR_AR.resourcesLinks[0].label, href: '/blog' },
        { label: 'Case Studies', labelAr: NAVBAR_AR.resourcesLinks[1].label, href: '/projects' },
      ],
      megaMenuImageUrl: DEFAULT_MEGA_MENU_IMAGE,
    },
    pageHeroImages: { ...DEFAULT_PAGE_HERO_IMAGES },
    footer: {
      description:
        'Specialized integrated Project Management consultancy and Engineering services across desalination, oil & gas, water infrastructure, and industrial sectors in Saudi Arabia.',
      descriptionAr: FOOTER_AR.description,
      divisionTagline: DIVISION_TAGLINE,
      divisionTaglineAr: DIVISION_TAGLINE_AR,
      certificationImageUrl: CERTIFICATIONS_FOOTER_IMAGE,
      contactHeading: 'Contact',
      contactHeadingAr: FOOTER_CONTACT_AR,
      serviceLinks: [
        { label: 'FEED Services', labelAr: FOOTER_AR.serviceLinks[0].label, href: '/services/front-end-engineering-feed' },
        { label: 'Project Management', labelAr: FOOTER_AR.serviceLinks[1].label, href: '/services/project-management-consultancy' },
        { label: 'Design Management', labelAr: FOOTER_AR.serviceLinks[2].label, href: '/services/detailed-engineering-design-management' },
        { label: 'Operations & Maintenance', labelAr: FOOTER_AR.serviceLinks[3].label, href: '/services/operations-maintenance' },
      ],
      companyLinks: [
        { label: 'About Us', labelAr: FOOTER_AR.companyLinks[0].label, href: '/about' },
        { label: 'Our Projects', labelAr: FOOTER_AR.companyLinks[1].label, href: '/projects' },
        { label: 'Divisions', labelAr: FOOTER_AR.companyLinks[2].label, href: '/divisions' },
        { label: 'Careers', labelAr: FOOTER_AR.companyLinks[3].label, href: '/careers' },
        { label: 'Contact', labelAr: FOOTER_AR.companyLinks[4].label, href: '/contact' },
      ],
      officeCities: ['Jeddah'],
      privacyLabel: 'Privacy Policy',
      privacyLabelAr: FOOTER_AR.privacyLabel,
      termsLabel: 'Terms',
      termsLabelAr: FOOTER_AR.termsLabel,
    },
    globalContent: {
      siteName: SEED_SITE_SETTINGS.siteName,
      siteNameAr: GLOBAL_AR.siteName,
      tagline: SEED_SITE_SETTINGS.tagline ?? '',
      taglineAr: GLOBAL_AR.tagline,
      phone: SEED_SITE_SETTINGS.phone ?? '',
      email: SEED_SITE_SETTINGS.email ?? '',
      address: COMPANY_ADDRESS,
      addressAr: GLOBAL_AR.address,
      linkedIn: SEED_SITE_SETTINGS.linkedIn ?? '',
      twitter: SEED_SITE_SETTINGS.twitter ?? '',
      copyrightText: COPYRIGHT_TEXT,
      copyrightTextAr: GLOBAL_AR.copyrightText,
      logoUrl: LOGO_PATH,
    },
    homepageSections: DEFAULT_HOMEPAGE_SECTIONS.map((type) =>
      createSectionInstance(type),
    ),
    sectionContent: Object.fromEntries(
      Object.entries({
        blog: {
          label: 'Blog',
          title: 'Latest Insights',
          description: 'Engineering news, project updates, and industry perspectives from our team.',
        },
        services: {
          label: 'Our Expertise',
          title: 'Integrated Project & Engineering Services',
          description:
            'Project management consultancy and engineering for industrial plants across Saudi Arabia.',
        },
        whyUs: {
          label: 'Why Reliable',
          title: 'Why Choose Reliable Company',
          description:
            '100+ years of combined experience, 500+ projects delivered, and a passion for quality, innovation, and on-time delivery.',
        },
        industries: {
          label: 'Industries',
          title: "Industries We've Worked With",
          description:
            'Project management and engineering consultancy across desalination, oil & gas, construction, manufacturing, and environmental sectors.',
        },
        divisions: {
          label: 'Divisions',
          title: 'Our Core Capabilities',
          description:
            'Project Management Consultancy and Engineering Services — working as one integrated team.',
        },
        projects: {
          label: 'Projects',
          title: 'Featured Projects',
          description:
            'A selection of projects delivered across desalination, oil & gas, water infrastructure, and industrial sectors.',
        },
      }).map(([key, content]) => {
        const ar = SECTION_CONTENT_AR[key]
        return [
          key,
          {
            ...content,
            ...(ar
              ? {
                  labelAr: ar.label,
                  titleAr: ar.title,
                  descriptionAr: ar.description,
                }
              : {}),
          },
        ]
      }),
    ) as CmsStore['sectionContent'],
    ctaBanner: {
      title: 'Collaborate, Communicate, Complete.',
      titleAr: CTA_AR.title,
      description:
        'Tell us about your project and our team will respond within one business day.',
      descriptionAr: CTA_AR.description,
      emailPlaceholder: 'Enter your email address',
      emailPlaceholderAr: CTA_AR.emailPlaceholder,
      buttonText: 'Request Consultation',
      buttonTextAr: CTA_AR.buttonText,
      secondaryButtonText: 'Contact Us',
      secondaryButtonTextAr: CTA_AR.secondaryButtonText,
      secondaryButtonLink: '/contact',
    },
    fieldStyles: {},
    hero: SEED_HERO,
    whyStats: SEED_WHY_STATS,
    divisions: SEED_DIVISIONS,
    services: SEED_SERVICES.map((service, index) =>
      applyServiceDetailExtras({
        ...service,
        status: 'active' as const,
        order: service.order ?? index + 1,
      }),
    ),
    projects: SEED_PROJECTS.map((project) => ({
      ...project,
      status: 'active' as const,
    })),
    team: SEED_TEAM,
    industries: [
      { _id: 'ind-1', title: 'Desalination', icon: 'Droplets', order: 1, status: 'active' },
      { _id: 'ind-2', title: 'Oil & Gas', icon: 'Flame', order: 2, status: 'active' },
      { _id: 'ind-3', title: 'Construction', icon: 'Building2', order: 3, status: 'active' },
      { _id: 'ind-4', title: 'Engineering', icon: 'Compass', order: 4, status: 'active' },
      { _id: 'ind-5', title: 'Manufacturing', icon: 'Factory', order: 5, status: 'active' },
      { _id: 'ind-6', title: 'Environmental & Sustainability', icon: 'Leaf', order: 6, status: 'active' },
    ],
    certifications: [
      { _id: 'cert-1', name: 'Certified Project Managers', order: 1 },
      { _id: 'cert-2', name: 'Owner\'s Engineer / Consultant', order: 2 },
      { _id: 'cert-3', name: 'Industrial Plant Specialists', order: 3 },
    ],
    values: [
      { _id: 'val-1', title: 'Quality & Service', description: 'Passion for quality and service in every deliverable — from concept through final handover.', icon: 'Award', order: 1 },
      { _id: 'val-2', title: 'Innovative Thinking', description: 'Innovative thinking and modern methodologies to solve complex industrial and infrastructure challenges.', icon: 'Lightbulb', order: 2 },
      { _id: 'val-3', title: 'Hands-on Experience', description: 'Hands-on experience across desalination, oil & gas, water infrastructure, FEED, and construction.', icon: 'Wrench', order: 3 },
      { _id: 'val-4', title: 'On-time Delivery', description: 'We deliver projects on-time within budget with full compliance. Time is money.', icon: 'Clock', order: 4 },
    ],
    pages: {
      about: SEED_ABOUT_PAGE,
      privacy: SEED_PRIVACY_PAGE,
      terms: SEED_TERMS_PAGE,
    },
    pageSeo: createDefaultPageSeo(),
    blogPosts: [
      {
        _id: 'blog-1',
        title: 'Integrated Engineering for Saudi Mega Projects',
        slug: 'integrated-engineering-saudi-mega-projects',
        excerpt: 'How multidisciplinary teams deliver complex infrastructure across the Kingdom.',
        content: blocksToText(
          blocks(
            'Saudi Arabia continues to invest in transformative infrastructure — from NEOM and the Red Sea to metro systems and industrial cities.',
            'Reliable Engineering brings civil, electrical, mechanical, and IT expertise under one roof to reduce coordination risk and accelerate delivery.',
          ),
        ),
        status: 'published',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
    careers: [
      {
        _id: 'career-1',
        title: 'Senior Civil Engineer',
        department: 'Civil Engineering',
        location: 'Riyadh',
        description: 'Lead structural design for commercial and infrastructure projects.',
        status: 'active',
        order: 1,
      },
      {
        _id: 'career-2',
        title: 'Electrical Design Engineer',
        department: 'Electrical Systems',
        location: 'Jeddah',
        description: 'Design MV/LV distribution and low-current systems for industrial clients.',
        status: 'active',
        order: 2,
      },
      {
        _id: 'career-3',
        title: 'HVAC Engineer',
        department: 'Mechanical & HVAC',
        location: 'Dammam',
        description: 'Perform load calculations and HVAC design for commercial developments.',
        status: 'active',
        order: 3,
      },
    ],
    careerApplications: [],
    enquiries: [],
  }
}
