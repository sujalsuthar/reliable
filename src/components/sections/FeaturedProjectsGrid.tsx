'use client'

import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import ProjectCard from '@/components/ui/ProjectCard'
import type { DivisionType, ProjectListItem } from '@/lib/types'

interface FeaturedProjectsGridProps {
  projects: ProjectListItem[]
}

export default function FeaturedProjectsGrid({
  projects,
}: FeaturedProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <AnimateOnScroll key={project._id} delay={index * 0.1} className="w-full">
          <ProjectCard
            title={project.title}
            shortDescription={project.shortDescription}
            thumbnail={project.thumbnail}
            division={project.division?.name ?? ''}
            divisionType={project.division?.type as DivisionType | undefined}
            tags={project.tags}
          />
        </AnimateOnScroll>
      ))}
    </div>
  )
}
