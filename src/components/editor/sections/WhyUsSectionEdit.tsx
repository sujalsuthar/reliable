'use client'

import Editable from '@/components/editor/Editable'
import SectionHeaderEdit from '@/components/editor/sections/SectionHeaderEdit'
import { useEditor } from '@/components/editor/EditorProvider'

export default function WhyUsSectionEdit() {
  const { store } = useEditor()
  const stats = [...store.whyStats].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  return (
    <section className="section-pad bg-primary-900 text-white">
      <div className="site-container">
        <div className="mb-14 [&_.section-subtitle]:text-white/65 [&_.section-title]:text-white [&_span]:border-primary-700 [&_span]:text-accent-400">
          <SectionHeaderEdit sectionKey="whyUs" />
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => {
            const index = store.whyStats.findIndex((s) => s._id === stat._id)
            return (
            <div key={stat._id} className="text-center">
              <Editable
                path={`whyStats.${index}.value`}
                type="text"
                label={`Stat ${index + 1} Value`}
                as="p"
                className="text-3xl font-bold text-accent-400 md:text-4xl"
              >
                {stat.value}
              </Editable>
              <Editable
                path={`whyStats.${index}.label`}
                type="text"
                label={`Stat ${index + 1} Label`}
                as="p"
                className="mt-2 text-sm text-white/55"
              >
                {stat.label}
              </Editable>
            </div>
            )
          })}
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          Manage all stats in CMS → Why Us Stats, or edit inline above.
        </p>
      </div>
    </section>
  )
}
