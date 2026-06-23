import FeaturedProjectsGrid from '@/components/sections/FeaturedProjectsGrid'
import Button from '@/components/ui/Button'
import SectionHeader from '@/components/ui/SectionHeader'
import { getFeaturedProjects, getSectionContent } from '@/lib/content'
import { getLocale } from '@/lib/i18n/locale'
import { getMessages } from '@/lib/i18n/messages'

export default async function Projects() {
  const locale = await getLocale()
  const ui = getMessages(locale)
  const [projects, header] = await Promise.all([
    getFeaturedProjects(),
    getSectionContent('projects'),
  ])

  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <SectionHeader
          label={header?.label ?? 'Projects'}
          title={header?.title ?? 'Featured Projects'}
          description={
            header?.description ??
            'Explore a selection of our landmark projects — from infrastructure and industrial facilities to smart building systems across the Kingdom.'
          }
        />

        {projects.length > 0 && <FeaturedProjectsGrid projects={projects} />}

        <div className="mt-12 text-center">
          <Button href="/projects" variant="outline" size="md" className="px-6">
            {ui.sections.viewAllProjects}
          </Button>
        </div>
      </div>
    </section>
  )
}
