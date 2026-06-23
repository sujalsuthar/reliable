import DivisionsGrid from '@/components/sections/DivisionsGrid'
import SectionHeader from '@/components/ui/SectionHeader'
import { getDivisions, getSectionContent } from '@/lib/content'

export default async function Divisions() {
  const [divisions, header] = await Promise.all([
    getDivisions(),
    getSectionContent('divisions'),
  ])

  return (
    <section className="section-pad bg-gray-50">
      <div className="site-container">
        <SectionHeader
          label={header?.label ?? 'Divisions'}
          title={header?.title ?? 'Four Specialized Engineering Divisions'}
          description={
            header?.description ??
            'Our multidisciplinary teams bring deep expertise across civil, electrical, mechanical, and IT engineering — delivering integrated solutions for every phase of your project.'
          }
        />

        {divisions.length > 0 && <DivisionsGrid divisions={divisions} />}
      </div>
    </section>
  )
}
