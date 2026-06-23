import { createInitialStore } from '@/lib/cms/init-store'
import type {
  BlogPost,
  Career,
  CareerApplication,
  Certification,
  CmsCollection,
  CmsPages,
  CmsProject,
  CmsService,
  CmsSingleton,
  CmsStore,
  CompanyValue,
  Enquiry,
  Industry,
} from '@/lib/cms/types'
import {
  createSectionInstance,
  DEFAULT_HOMEPAGE_SECTIONS,
} from '@/lib/cms/editor/sections'
import { mergePageSeo } from '@/lib/cms/page-seo'
import { COMPANY_PHONE, LOGO_PATH } from '@/lib/brand'
import { DEFAULT_MEGA_MENU_IMAGE, DEFAULT_PAGE_HERO_IMAGES } from '@/lib/page-heroes'
import { readRawStore, writeRawStore, isKvEnabled } from '@/lib/cms/storage'
import type { Division, Hero, SiteSettings, TeamMember, WhyStat } from '@/lib/types'

export const PROFILE_VERSION = 7

let memoryStore: CmsStore | null = null

function migrateStore(store: CmsStore): CmsStore {
  const initial = createInitialStore()
  const migrated: CmsStore = { ...initial, ...store }

  if (!store.globalContent) {
    migrated.globalContent = initial.globalContent
  }
  if (!store.homepageSections?.length) {
    migrated.homepageSections = initial.homepageSections
  }
  if (!store.sectionContent) {
    migrated.sectionContent = initial.sectionContent
  }
  if (!store.ctaBanner) {
    migrated.ctaBanner = initial.ctaBanner
  }
  if (!store.fieldStyles) {
    migrated.fieldStyles = {}
  }
  if (!store.navbar) {
    migrated.navbar = initial.navbar
  }
  migrated.pageSeo = mergePageSeo(store.pageSeo)
  migrated.footer = {
    ...initial.footer,
    ...store.footer,
    divisionTagline: store.footer?.divisionTagline ?? initial.footer.divisionTagline,
    divisionTaglineAr: store.footer?.divisionTaglineAr ?? initial.footer.divisionTaglineAr,
    certificationImageUrl:
      store.footer?.certificationImageUrl ?? initial.footer.certificationImageUrl,
    contactHeading: store.footer?.contactHeading ?? initial.footer.contactHeading,
    contactHeadingAr: store.footer?.contactHeadingAr ?? initial.footer.contactHeadingAr,
  }

  const legacyEmail = 'engineering@reliablecompany.sa'
  const email =
    !store.globalContent?.email || store.globalContent.email === legacyEmail
      ? initial.globalContent.email
      : store.globalContent.email

  const legacyPhones = new Set(['', '+966 12 345 6789', '+966123456789'])
  const phone =
    !store.globalContent?.phone || legacyPhones.has(store.globalContent.phone)
      ? initial.globalContent.phone || COMPANY_PHONE
      : store.globalContent.phone

  migrated.globalContent = {
    ...initial.globalContent,
    ...store.globalContent,
    logoUrl: store.globalContent?.logoUrl || LOGO_PATH,
    address: store.globalContent?.address || initial.globalContent.address,
    addressAr: store.globalContent?.addressAr ?? initial.globalContent.addressAr,
    phone,
    email,
    copyrightText:
      store.globalContent?.copyrightText || initial.globalContent.copyrightText,
  }

  migrated.siteSettings = {
    ...initial.siteSettings,
    ...store.siteSettings,
    phone,
    email,
  }

  migrated.pageHeroImages = {
    ...DEFAULT_PAGE_HERO_IMAGES,
    ...store.pageHeroImages,
  }

  migrated.navbar = {
    ...initial.navbar,
    ...store.navbar,
    megaMenuImageUrl:
      store.navbar?.megaMenuImageUrl || DEFAULT_MEGA_MENU_IMAGE,
  }

  if (!store.hero?.backgroundImage?.src) {
    migrated.hero = {
      ...initial.hero,
      ...store.hero,
      backgroundImage: initial.hero.backgroundImage,
    }
  }

  return migrated
}

function applyEngineeringSeedMigration(store: CmsStore): CmsStore {
  const initial = createInitialStore()
  return {
    ...initial,
    profileVersion: PROFILE_VERSION,
    enquiries: store.enquiries ?? [],
    careerApplications: store.careerApplications ?? [],
    pages: {
      ...initial.pages,
      privacy: store.pages?.privacy ?? initial.pages.privacy,
      terms: store.pages?.terms ?? initial.pages.terms,
    },
    globalContent: {
      ...initial.globalContent,
      logoUrl: store.globalContent?.logoUrl || LOGO_PATH,
      phone: store.globalContent?.phone || initial.globalContent.phone,
      email: store.globalContent?.email || initial.globalContent.email,
    },
    navbar: {
      ...initial.navbar,
      megaMenuImageUrl:
        store.navbar?.megaMenuImageUrl || initial.navbar.megaMenuImageUrl,
    },
    footer: {
      ...initial.footer,
      certificationImageUrl:
        store.footer?.certificationImageUrl ?? initial.footer.certificationImageUrl,
    },
  }
}

async function persistStore(store: CmsStore) {
  // On Vercel KV, skip in-memory cache so every instance reads fresh writes
  if (!isKvEnabled()) {
    memoryStore = store
  }
  await writeRawStore(store)
}

export async function getStore(): Promise<CmsStore> {
  if (!isKvEnabled() && memoryStore) return memoryStore

  const raw = await readRawStore()
  if (!raw) {
    const initial = createInitialStore()
    initial.profileVersion = PROFILE_VERSION
    await persistStore(initial)
    return initial
  }

  let store = migrateStore(raw)

  if ((store.profileVersion ?? 0) < PROFILE_VERSION) {
    store = applyEngineeringSeedMigration(store)
    await persistStore(store)
    return store
  }

  if (!isKvEnabled()) {
    memoryStore = store
  }
  return store
}

export async function saveStore(store: CmsStore) {
  const synced = syncGlobalToSiteSettings({
    ...store,
    profileVersion: PROFILE_VERSION,
  })
  memoryStore = null
  await persistStore(synced)
  const { revalidatePublicContent } = await import('@/lib/cms/revalidate')
  revalidatePublicContent()
}

/** Keeps siteSettings in sync with globalContent for legacy readers */
export function syncGlobalToSiteSettings(store: CmsStore): CmsStore {
  return {
    ...store,
    siteSettings: {
      ...store.siteSettings,
      siteName: store.globalContent.siteName,
      tagline: store.globalContent.tagline,
      phone: store.globalContent.phone,
      email: store.globalContent.email,
      address: store.globalContent.address,
      linkedIn: store.globalContent.linkedIn,
      twitter: store.globalContent.twitter,
      logo: store.globalContent.logoUrl
        ? { _type: 'image', src: store.globalContent.logoUrl, alt: store.globalContent.siteName }
        : store.siteSettings.logo,
    },
  }
}

function newId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

type CollectionItemMap = {
  services: CmsService
  projects: CmsProject
  blogPosts: BlogPost
  careers: Career
  careerApplications: CareerApplication
  enquiries: Enquiry
  industries: Industry
  divisions: Division
  team: TeamMember
  certifications: Certification
  values: CompanyValue
  whyStats: WhyStat
}

export async function listCollection<K extends CmsCollection>(
  collection: K,
): Promise<CollectionItemMap[K][]> {
  const store = await getStore()
  return store[collection] as CollectionItemMap[K][]
}

export async function getCollectionItem<K extends CmsCollection>(
  collection: K,
  id: string,
): Promise<CollectionItemMap[K] | null> {
  const items = await listCollection(collection)
  return (items.find((item) => item._id === id) as CollectionItemMap[K]) ?? null
}

export async function createCollectionItem<K extends CmsCollection>(
  collection: K,
  data: Omit<CollectionItemMap[K], '_id'> & { _id?: string },
): Promise<CollectionItemMap[K]> {
  const store = await getStore()
  const item = { ...data, _id: data._id ?? newId(collection) } as CollectionItemMap[K]
  ;(store[collection] as CollectionItemMap[K][]).push(item)
  await saveStore(store)
  return item
}

export async function updateCollectionItem<K extends CmsCollection>(
  collection: K,
  id: string,
  data: Partial<CollectionItemMap[K]>,
): Promise<CollectionItemMap[K] | null> {
  const store = await getStore()
  const items = store[collection] as CollectionItemMap[K][]
  const index = items.findIndex((item) => item._id === id)
  if (index === -1) return null

  items[index] = { ...items[index], ...data, _id: id }
  await saveStore(store)
  return items[index]
}

export async function deleteCollectionItem(
  collection: CmsCollection,
  id: string,
): Promise<boolean> {
  const store = await getStore()
  const items = store[collection] as { _id: string }[]
  const next = items.filter((item) => item._id !== id)
  if (next.length === items.length) return false

  switch (collection) {
    case 'services':
      store.services = next as CmsService[]
      break
    case 'projects':
      store.projects = next as CmsProject[]
      break
    case 'blogPosts':
      store.blogPosts = next as BlogPost[]
      break
    case 'careers':
      store.careers = next as Career[]
      break
    case 'careerApplications':
      store.careerApplications = next as CareerApplication[]
      break
    case 'enquiries':
      store.enquiries = next as Enquiry[]
      break
    case 'industries':
      store.industries = next as Industry[]
      break
    case 'divisions':
      store.divisions = next as Division[]
      break
    case 'team':
      store.team = next as TeamMember[]
      break
    case 'certifications':
      store.certifications = next as Certification[]
      break
    case 'values':
      store.values = next as CompanyValue[]
      break
    case 'whyStats':
      store.whyStats = next as WhyStat[]
      break
  }

  await saveStore(store)
  return true
}

export async function getSingleton(
  name: 'siteSettings',
): Promise<SiteSettings>
export async function getSingleton(name: 'hero'): Promise<Hero>
export async function getSingleton(name: 'pages'): Promise<CmsPages>
export async function getSingleton(name: CmsSingleton) {
  const store = await getStore()
  return store[name]
}

export async function updateSingleton(
  name: 'siteSettings',
  data: Partial<SiteSettings>,
): Promise<SiteSettings>
export async function updateSingleton(
  name: 'hero',
  data: Partial<Hero>,
): Promise<Hero>
export async function updateSingleton(
  name: 'pages',
  data: Partial<CmsPages>,
): Promise<CmsPages>
export async function updateSingleton(name: CmsSingleton, data: unknown) {
  const store = await getStore()

  if (name === 'pages') {
    store.pages = { ...store.pages, ...(data as Partial<CmsPages>) }
  } else if (name === 'hero') {
    store.hero = { ...store.hero, ...(data as Partial<Hero>) }
  } else {
    store.siteSettings = { ...store.siteSettings, ...(data as Partial<SiteSettings>) }
  }

  await saveStore(store)
  return store[name]
}

export async function updateHomepageSections(
  sections: CmsStore['homepageSections'],
) {
  const store = await getStore()
  store.homepageSections = sections
  await saveStore(store)
  return sections
}

export async function addHomepageSection(type: CmsStore['homepageSections'][0]['type']) {
  const store = await getStore()
  const section = createSectionInstance(type)
  store.homepageSections.push(section)
  await saveStore(store)
  return section
}

export async function duplicateHomepageSection(id: string) {
  const store = await getStore()
  const source = store.homepageSections.find((s) => s.id === id)
  if (!source) return null
  const copy = createSectionInstance(source.type)
  store.homepageSections.push(copy)
  await saveStore(store)
  return copy
}

export async function removeHomepageSection(id: string) {
  const store = await getStore()
  const next = store.homepageSections.filter((s) => s.id !== id)
  if (next.length === store.homepageSections.length) return false
  if (next.length === 0) {
    store.homepageSections = DEFAULT_HOMEPAGE_SECTIONS.map((type) =>
      createSectionInstance(type),
    )
  } else {
    store.homepageSections = next
  }
  await saveStore(store)
  return true
}

export async function patchStoreField(path: string, value: unknown) {
  const { setStoreField } = await import('@/lib/cms/editor/field-path')
  const store = await getStore()
  let next = setStoreField(store, path, value)

  if (path === 'hero.primaryButton' && value && typeof value === 'object') {
    const btn = value as { text?: string; href?: string }
    next = setStoreField(next, 'hero.primaryButtonText', btn.text ?? '')
    next = setStoreField(next, 'hero.primaryButtonLink', btn.href ?? '')
  }
  if (path === 'hero.secondaryButton' && value && typeof value === 'object') {
    const btn = value as { text?: string; href?: string }
    next = setStoreField(next, 'hero.secondaryButtonText', btn.text ?? '')
    next = setStoreField(next, 'hero.secondaryButtonLink', btn.href ?? '')
  }
  if (path === 'ctaBanner.secondaryButton' && value && typeof value === 'object') {
    const btn = value as { text?: string; href?: string }
    next = setStoreField(next, 'ctaBanner.secondaryButtonText', btn.text ?? '')
    next = setStoreField(next, 'ctaBanner.secondaryButtonLink', btn.href ?? '')
  }
  if (path.startsWith('globalContent.')) {
    next = syncGlobalToSiteSettings(next)
  }

  await saveStore(next)
  return next
}

export async function addEnquiry(
  enquiry: Omit<Enquiry, '_id' | 'status' | 'submittedAt'>,
) {
  return createCollectionItem('enquiries', {
    ...enquiry,
    status: 'new',
    submittedAt: new Date().toISOString(),
  })
}

export async function addCareerApplication(
  application: Omit<CareerApplication, '_id' | 'status' | 'submittedAt'>,
) {
  return createCollectionItem('careerApplications', {
    ...application,
    status: 'new',
    submittedAt: new Date().toISOString(),
  })
}
