'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import ProjectCard from '@/components/ui/ProjectCard'
import ProjectFilter, {
  type ProjectFilterType,
} from '@/components/ui/ProjectFilter'
import { useLocale } from '@/components/providers/LocaleProvider'
import type { DivisionType, ProjectListItem } from '@/lib/types'

interface ProjectGridProps {
  projects: ProjectListItem[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const { messages } = useLocale()
  const [activeFilter, setActiveFilter] = useState<ProjectFilterType>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === 'all' || project.division?.type === activeFilter

      const matchesSearch =
        !query || project.title.toLowerCase().includes(query)

      return matchesFilter && matchesSearch
    })
  }, [projects, activeFilter, searchQuery])

  return (
    <>
      <ProjectFilter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <AnimateOnScroll key={project._id} delay={index * 0.1} className="w-full">
              <Link
                href={`/projects/${project.slug?.current ?? project._id}`}
                className="group block h-full"
              >
                <ProjectCard
                  title={project.title}
                  shortDescription={project.shortDescription}
                  thumbnail={project.thumbnail}
                  division={project.division?.name ?? ''}
                  divisionType={project.division?.type as DivisionType | undefined}
                  tags={project.tags}
                  className="h-full transition group-hover:shadow-hover"
                />
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      ) : (
        <div className="rounded-card border border-gray-100 bg-gray-50 px-6 py-16 text-center">
          <p className="text-lg font-medium text-gray-900">
            {messages.projectPage.noResults}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            {messages.projectPage.noResultsHint}
          </p>
        </div>
      )}
    </>
  )
}
