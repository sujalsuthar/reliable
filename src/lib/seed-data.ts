import type { PortableTextBlock } from '@portabletext/types'

import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from '@/lib/brand'
import { ABOUT_PAGE_AR, HERO_AR } from '@/lib/i18n/cms-ar'
import { DEFAULT_HERO_HOME_IMAGE } from '@/lib/page-heroes'
import { PROFILE_ABOUT, PROFILE_IMAGES, PROFILE_SUBTITLE, PROFILE_TAGLINE } from '@/lib/profile-content'
import type {
  Division,
  Hero,
  Page,
  Project,
  Service,
  SiteSettings,
  TeamMember,
  WhyStat,
} from '@/lib/types'

function block(text: string, key: string): PortableTextBlock {
  return {
    _type: 'block',
    _key: key,
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: `${key}-span`, text, marks: [] }],
  }
}

function blocks(...paragraphs: string[]): PortableTextBlock[] {
  return paragraphs.map((text, i) => block(text, `b${i}`))
}

export const SEED_SITE_SETTINGS: SiteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  siteName: 'Reliable Company',
  tagline: `${PROFILE_TAGLINE} ${PROFILE_SUBTITLE} consultancy for industrial and infrastructure projects across Saudi Arabia.`,
  phone: COMPANY_PHONE,
  email: COMPANY_EMAIL,
  address: COMPANY_ADDRESS,
  linkedIn: 'https://www.linkedin.com/company/reliablecompany',
  siteNameAr: 'شركة ريلايبل',
}

export const SEED_HERO: Hero = {
  _id: 'hero',
  _type: 'hero',
  eyebrow: PROFILE_SUBTITLE.toUpperCase(),
  eyebrowAr: HERO_AR.eyebrow,
  headline: `${PROFILE_TAGLINE.replace('.', '')}`,
  headlineAr: HERO_AR.headline,
  highlightedWord: 'Complete.',
  highlightedWordAr: HERO_AR.highlightedWord,
  subheadline:
    'Specialized integrated Project Management consultancy and Engineering services. From FEED and design management to construction, commissioning, operations, and plant optimization.',
  subheadlineAr: HERO_AR.subheadline,
  primaryButtonText: 'Explore Our Services',
  primaryButtonTextAr: HERO_AR.primaryButtonText,
  primaryButtonLink: '/services',
  secondaryButtonText: 'Contact Us',
  secondaryButtonTextAr: HERO_AR.secondaryButtonText,
  secondaryButtonLink: '/contact',
  stats: [
    { _key: 's1', number: '100+', label: 'Years Combined Experience', labelAr: HERO_AR.stats[0].label },
    { _key: 's2', number: '500+', label: 'Projects Delivered', labelAr: HERO_AR.stats[1].label },
    { _key: 's3', number: '2016', label: 'Founded in UAE', labelAr: HERO_AR.stats[2].label },
    { _key: 's4', number: '2023', label: 'Expanded to KSA', labelAr: HERO_AR.stats[3].label },
  ],
  backgroundImage: {
    src: DEFAULT_HERO_HOME_IMAGE,
    alt: 'Reliable Company — Project Management & Engineering',
  },
}

export const SEED_WHY_STATS: WhyStat[] = [
  { _id: 'why-1', _type: 'whyStat', value: '100+', label: 'Years Combined Experience', labelAr: 'سنوات خبرة مجتمعة', order: 1 },
  { _id: 'why-2', _type: 'whyStat', value: '500+', label: 'Projects Delivered', labelAr: 'مشروع منجز', order: 2 },
  { _id: 'why-3', _type: 'whyStat', value: '95%+', label: 'Plant Availability', labelAr: 'توفر المنشآت', order: 3 },
  { _id: 'why-4', _type: 'whyStat', value: '9', label: 'Core Service Areas', labelAr: 'مجالات خدمة أساسية', order: 4 },
]

export const SEED_DIVISIONS: Division[] = [
  {
    _id: 'div-pmc',
    _type: 'division',
    name: 'Project Management Consultancy',
    slug: { _type: 'slug', current: 'project-management' },
    type: 'civil',
    tagLabel: 'PMC & Program Management',
    description:
      'End-to-end project and program management from planning and scheduling through risk management, stakeholder coordination, and successful handover.',
    bulletPoints: [
      'Project planning, monitoring and reporting',
      'Program governance and project controls',
      'Construction management and contractor oversight',
      'Commercial and cost management',
    ],
    order: 1,
  },
  {
    _id: 'div-engineering',
    _type: 'division',
    name: 'Engineering Services',
    slug: { _type: 'slug', current: 'engineering-services' },
    type: 'mechanical',
    tagLabel: 'FEED • Design • Commissioning',
    description:
      'Front-end engineering, detailed design management, procurement, commissioning, operations and optimization for industrial plants and utilities.',
    bulletPoints: [
      'Front-End Engineering Design (FEED)',
      'Detailed engineering and design management',
      'Procurement and commissioning management',
      'Operations, maintenance and plant optimization',
    ],
    order: 2,
  },
]

export const SEED_SERVICES: Service[] = [
  {
    _id: 'svc-feed',
    _type: 'service',
    title: 'Front-End Engineering Design (FEED)',
    slug: { _type: 'slug', current: 'front-end-engineering-feed' },
    icon: 'Compass',
    shortDescription:
      'Define project scope and preliminary engineering to establish the foundation for successful industrial plant execution.',
    fullDescription: blocks(
      'FEED (Front End Engineering Design) is a crucial phase in the lifecycle of industrial plants. It is where the project scope is defined and preliminary engineering is conducted to gather all necessary information for project execution.',
      'Our FEED studies cover feasibility, process design, mechanical, electrical, civil and structural design, instrumentation and control, safety and environmental considerations, risk assessment, cost estimation, and documentation — ensuring projects meet technical, economic, and regulatory standards.',
    ),
    order: 1,
  },
  {
    _id: 'svc-pmc',
    _type: 'service',
    title: 'Project Management Consultancy',
    slug: { _type: 'slug', current: 'project-management-consultancy' },
    icon: 'ClipboardCheck',
    shortDescription:
      'Streamline your project from start to finish with proven planning, scheduling, budgeting, and risk management methodologies.',
    fullDescription: blocks(
      'Our Project Management Services are designed to streamline your project from start to finish. Our team provides end-to-end solutions including planning, scheduling, budgeting, and risk management.',
      'Services include project planning and reporting, risk assessment and mitigation, scope and change management, stakeholder management, document management, cost estimation and budgeting, safety and quality management, quantity surveying, and contracts procurement management.',
    ),
    order: 2,
  },
  {
    _id: 'svc-design',
    _type: 'service',
    title: 'Detailed Engineering & Design Management',
    slug: { _type: 'slug', current: 'detailed-engineering-design-management' },
    icon: 'PenTool',
    shortDescription:
      'Integrate major and specialist design skills into one managed service with singular design team management.',
    fullDescription: blocks(
      'Starting from the design phase, we bring together the major and specialist skills involved in project design into one managed service. The goals are ultimately managed interfaces and singular design team management.',
      'Our design management services include requirements gathering, scope definition, consultant monitoring, design contract procurement, deliverable approval, time and cost control, permitting support, design progress meetings, regulatory compliance, constructability review, design workshops, and tender package management.',
    ),
    order: 3,
  },
  {
    _id: 'svc-procurement',
    _type: 'service',
    title: 'Procurement Management',
    slug: { _type: 'slug', current: 'procurement-management' },
    icon: 'ShoppingCart',
    shortDescription:
      'Comprehensive procurement solutions from sourcing and supplier selection through contract negotiation and delivery.',
    fullDescription: blocks(
      'Streamline your procurement process and achieve greater efficiency with our comprehensive procurement management solutions. From sourcing to delivery, our expertise ensures optimal supplier performance and cost savings.',
      'Services include procurement planning, sourcing suppliers, supplier selection, negotiating contracts, evaluating proposals, managing supplier performance, procurement execution and control, and contract management.',
    ),
    order: 4,
  },
  {
    _id: 'svc-program',
    _type: 'service',
    title: 'Program Management',
    slug: { _type: 'slug', current: 'program-management' },
    icon: 'Layers',
    shortDescription:
      'Govern multiple linked projects with consistent standards, oversight, and optimized inter-dependencies.',
    fullDescription: blocks(
      'Program Management oversees a group of individual projects linked through a shared organizational goal. The benefit is consistent governance and application of standards across multiple projects.',
      'RELIABLE COMPANY helps achieve the best outcomes by managing projects\' inter-dependencies, diverse stakeholders, and competing needs. Our services include pre and post strategic advice, procurement advice, program governance, project controls, client representation, and commercial and cost management.',
    ),
    order: 5,
  },
  {
    _id: 'svc-construction',
    _type: 'service',
    title: 'Construction Management',
    slug: { _type: 'slug', current: 'construction-management' },
    icon: 'HardHat',
    shortDescription:
      'End-to-end construction management from planning and scheduling to quality control and project handover.',
    fullDescription: blocks(
      'Streamline your construction projects and optimize resources with our comprehensive construction management services. Our experienced team offers end-to-end solutions from planning and scheduling to budgeting and quality control.',
      'We monitor contractors and project progress, manage time, cost and contracts, track procurement and submittals, manage documents, conduct progress meetings, assure safety and quality, and manage testing, commissioning, claims, and project closeout.',
    ),
    order: 6,
  },
  {
    _id: 'svc-commissioning',
    _type: 'service',
    title: 'Commissioning Management',
    slug: { _type: 'slug', current: 'commissioning-management' },
    icon: 'CheckCircle2',
    shortDescription:
      'Ensure all systems are installed, tested, and integrated before safe and efficient plant handover.',
    fullDescription: blocks(
      'The commissioning management phase ensures all systems and components are installed, tested, and integrated properly before the plant is handed over for operation.',
      'Our process covers pre-commissioning preparation, mechanical completion, system walkdowns, electrical and instrumentation verification, functional and integrated system testing, performance testing, operator training, documentation, handover to operations, and post-commissioning support.',
    ),
    order: 7,
  },
  {
    _id: 'svc-om',
    _type: 'service',
    title: 'Operations & Maintenance',
    slug: { _type: 'slug', current: 'operations-maintenance' },
    icon: 'Settings',
    shortDescription:
      'Reliable operations and maintenance for desalination plants, water treatment facilities, and industrial utilities.',
    fullDescription: blocks(
      'Operation and Maintenance of Desalination Plants, Water Treatment Plants, Industrial Facilities and General Utilities.',
      'Through predictive analysis, proactive monitoring, and timely decision-making, we ensure safe, smooth, and uninterrupted plant performance with over 95% availability. Our structured maintenance approach minimizes downtime, extends equipment life, and reduces operating costs.',
    ),
    order: 8,
  },
  {
    _id: 'svc-optimization',
    _type: 'service',
    title: 'Industrial Plant Optimization',
    slug: { _type: 'slug', current: 'industrial-plant-optimization' },
    icon: 'TrendingUp',
    shortDescription:
      'Continuous improvement of efficiency, productivity, reliability, and safety while reducing costs and environmental impact.',
    fullDescription: blocks(
      'Optimization of industrial plants is a continuous process aimed at improving efficiency, productivity, reliability, and safety while reducing costs and environmental impact.',
      'Our approach includes performance assessment, data collection and analysis, identification of improvement opportunities, process modeling and simulation, engineering design and analysis, implementation planning, testing and validation, performance monitoring, training, and iterative improvement cycles.',
    ),
    order: 9,
  },
]

export const SEED_PROJECTS: Project[] = [
  {
    _id: 'proj-desal',
    _type: 'project',
    title: 'Desalination Plant Operations & Maintenance',
    slug: { _type: 'slug', current: 'desalination-operations' },
    shortDescription:
      'Operations and maintenance program achieving 95%+ availability for a major desalination facility on the Red Sea coast.',
    fullDescription: blocks(
      'Reliable Company provides comprehensive operations and maintenance for desalination facilities, combining predictive analysis, proactive monitoring, and rapid expert intervention to optimize energy efficiency and water quality compliance.',
    ),
    division: { name: 'Engineering Services', type: 'mechanical' },
    tags: ['Desalination', 'Operations', 'Utilities'],
    thumbnail: { src: PROFILE_IMAGES.operations, alt: 'Desalination plant operations' },
    completedYear: 2024,
    featured: true,
  },
  {
    _id: 'proj-oilgas',
    _type: 'project',
    title: 'Oil & Gas FEED Study',
    slug: { _type: 'slug', current: 'oil-gas-feed-study' },
    shortDescription:
      'Front-End Engineering Design for an industrial processing facility in the oil and gas sector.',
    fullDescription: blocks(
      'Complete FEED study covering process design, mechanical and electrical systems, safety and environmental considerations, risk assessment, and cost estimation for a major oil and gas processing project.',
    ),
    division: { name: 'Engineering Services', type: 'mechanical' },
    tags: ['Oil & Gas', 'FEED', 'Industrial'],
    thumbnail: { src: PROFILE_IMAGES.feed, alt: 'Oil and gas engineering' },
    completedYear: 2023,
    featured: true,
  },
  {
    _id: 'proj-pmc',
    _type: 'project',
    title: 'Water Infrastructure PMC',
    slug: { _type: 'slug', current: 'water-infrastructure-pmc' },
    shortDescription:
      'Project management consultancy for a regional water infrastructure networking program.',
    fullDescription: blocks(
      'End-to-end project management consultancy including planning, risk management, stakeholder coordination, and document control for a complex water infrastructure program delivered on time and within budget.',
    ),
    division: { name: 'Project Management Consultancy', type: 'civil' },
    tags: ['Water', 'Infrastructure', 'PMC'],
    thumbnail: { src: PROFILE_IMAGES.pmc, alt: 'Project management consultancy' },
    completedYear: 2024,
    featured: true,
  },
  {
    _id: 'proj-construction',
    _type: 'project',
    title: 'Industrial Construction Management',
    slug: { _type: 'slug', current: 'industrial-construction-management' },
    shortDescription:
      'Construction management for a large-scale industrial manufacturing facility in the Eastern Province.',
    fullDescription: blocks(
      'Full construction management services including contractor monitoring, progress tracking, quality and safety assurance, and commissioning support for an industrial complex.',
    ),
    division: { name: 'Project Management Consultancy', type: 'civil' },
    tags: ['Construction', 'Industrial', 'Manufacturing'],
    thumbnail: { src: PROFILE_IMAGES.construction, alt: 'Construction management' },
    completedYear: 2023,
    featured: true,
  },
  {
    _id: 'proj-commissioning',
    _type: 'project',
    title: 'Plant Commissioning Management',
    slug: { _type: 'slug', current: 'plant-commissioning' },
    shortDescription:
      'Commissioning management for a water treatment plant from mechanical completion through handover.',
    fullDescription: blocks(
      'Structured commissioning program covering system walkdowns, functional testing, integrated system testing, operator training, and handover to operations.',
    ),
    division: { name: 'Engineering Services', type: 'mechanical' },
    tags: ['Commissioning', 'Water Treatment', 'Industrial'],
    thumbnail: { src: PROFILE_IMAGES.commissioning, alt: 'Commissioning management' },
    completedYear: 2022,
    featured: false,
  },
]

export const SEED_TEAM: TeamMember[] = [
  { _id: 'team-1', _type: 'teamMember', name: 'Certified Project Managers', role: 'Project Management', division: 'PMC', order: 1 },
  { _id: 'team-2', _type: 'teamMember', name: 'Technical Engineering Experts', role: 'Engineering', division: 'Engineering Services', order: 2 },
  { _id: 'team-3', _type: 'teamMember', name: 'Skilled Design Specialists', role: 'Design Management', division: 'Engineering Services', order: 3 },
]

export const SEED_ABOUT_PAGE: Page = {
  _id: 'page-about',
  _type: 'page',
  title: 'Who We Are',
  titleAr: ABOUT_PAGE_AR.title,
  slug: { _type: 'slug', current: 'about' },
  content: blocks(...PROFILE_ABOUT.split('\n\n')),
  contentAr: blocks(...ABOUT_PAGE_AR.content),
}

export const SEED_PRIVACY_PAGE: Page = {
  _id: 'page-privacy',
  _type: 'page',
  title: 'Privacy Policy',
  slug: { _type: 'slug', current: 'privacy' },
  content: blocks(
    'Reliable Company ("we", "our", or "us") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard personal information when you visit our website or contact us.',
    'We may collect your name, email address, phone number, and project details when you submit our contact form. This information is used solely to respond to your inquiries and provide our services.',
    'We do not sell or share your personal data with third parties except as required by law or to deliver services you have requested.',
    'For questions about this policy, contact us at info@reliablecompany.sa.',
  ),
}

export const SEED_TERMS_PAGE: Page = {
  _id: 'page-terms',
  _type: 'page',
  title: 'Terms of Service',
  slug: { _type: 'slug', current: 'terms' },
  content: blocks(
    'By accessing and using the Reliable Company website, you agree to these Terms of Service. All content on this website is the property of Reliable Company and is protected by applicable copyright laws.',
    'Information provided on this site is for general reference only and does not constitute professional advice. Specific project requirements should be discussed with our team.',
    'We reserve the right to modify these terms at any time. Continued use of the website constitutes acceptance of updated terms.',
  ),
}

export function getSeedServiceBySlug(slug: string): Service | null {
  return SEED_SERVICES.find((s) => s.slug?.current === slug) ?? null
}

export function getSeedProjectBySlug(slug: string): Project | null {
  return SEED_PROJECTS.find((p) => p.slug?.current === slug) ?? null
}

export function getSeedPageBySlug(slug: string): Page | null {
  const pages = [SEED_ABOUT_PAGE, SEED_PRIVACY_PAGE, SEED_TERMS_PAGE]
  return pages.find((p) => p.slug.current === slug) ?? null
}

export const SERVICE_IMAGE_MAP: Record<string, string> = {
  'front-end-engineering-feed': PROFILE_IMAGES.feed,
  'project-management-consultancy': PROFILE_IMAGES.pmc,
  'detailed-engineering-design-management': PROFILE_IMAGES.designManagement,
  'procurement-management': PROFILE_IMAGES.procurement,
  'program-management': PROFILE_IMAGES.programManagement,
  'construction-management': PROFILE_IMAGES.construction,
  'commissioning-management': PROFILE_IMAGES.commissioning,
  'operations-maintenance': PROFILE_IMAGES.operations,
  'industrial-plant-optimization': PROFILE_IMAGES.optimization,
}
