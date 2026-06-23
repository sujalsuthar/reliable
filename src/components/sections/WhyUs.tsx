import WhyUsStatsGrid from '@/components/sections/WhyUsStatsGrid'
import SectionHeader from '@/components/ui/SectionHeader'
import { getSectionContent, getWhyStats } from '@/lib/content'

export default async function WhyUs() {
  const [stats, header] = await Promise.all([
    getWhyStats(),
    getSectionContent('whyUs'),
  ])

  return (
    <section className="section-pad bg-primary-900 text-white">
      <div className="site-container">
        <SectionHeader
          label={header?.label ?? 'Why Reliable'}
          title={header?.title ?? 'Engineering Excellence in Saudi Arabia'}
          description={
            header?.description ??
            'Delivering integrated civil, electrical, mechanical, and IT solutions through decades of combined expertise and proven project delivery.'
          }
          className="mb-14 [&_.section-subtitle]:text-white/65 [&_.section-title]:text-white [&_span]:border-primary-700 [&_span]:text-accent-400"
        />

        <WhyUsStatsGrid stats={stats} variant="dark" />
      </div>
    </section>
  )
}
