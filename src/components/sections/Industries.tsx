import SectionHeader from '@/components/ui/SectionHeader'
import { getIndustries, getSectionContent } from '@/lib/content'
import { getLucideIcon } from '@/lib/icons'

export default async function Industries() {
  const [industries, header] = await Promise.all([
    getIndustries(),
    getSectionContent('industries'),
  ])

  return (
    <section className="section-pad bg-primary-50">
      <div className="site-container">
        <SectionHeader
          label={header?.label ?? 'Industries'}
          title={header?.title ?? 'Industries We Serve'}
          description={
            header?.description ??
            "Delivering integrated engineering expertise across the Kingdom's most demanding industrial and infrastructure sectors."
          }
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = getLucideIcon(industry.icon)
            return (
              <article
                key={industry._id}
                className="card-base flex items-center gap-4 p-5 sm:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-600 text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  {industry.title}
                </h3>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
