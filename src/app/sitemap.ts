import type { MetadataRoute } from 'next'

import { getAllProjects, getServices } from '@/lib/content'
import { BASE_URL } from '@/lib/seo'

const staticRoutes = [
  '/',
  '/services',
  '/divisions',
  '/projects',
  '/about',
  '/blog',
  '/careers',
  '/contact',
  '/privacy',
  '/terms',
] as const

export const revalidate = 60

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, projects] = await Promise.all([
    getServices(),
    getAllProjects(),
  ])

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${BASE_URL}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }))

  const serviceEntries: MetadataRoute.Sitemap = services
    .filter((service) => service.slug?.current)
    .map((service) => ({
      url: `${BASE_URL}/services/${service.slug!.current}`,
      lastModified: service._updatedAt
        ? new Date(service._updatedAt)
        : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  const projectEntries: MetadataRoute.Sitemap = projects
    .filter((project) => project.slug?.current)
    .map((project) => ({
      url: `${BASE_URL}/projects/${project.slug!.current}`,
      lastModified: project._updatedAt
        ? new Date(project._updatedAt)
        : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  return [...staticEntries, ...serviceEntries, ...projectEntries]
}
