'use client'

import SectionHeaderEdit from '@/components/editor/sections/SectionHeaderEdit'
import { getSectionLabel } from '@/lib/cms/editor/sections'
import type { SectionType } from '@/lib/cms/editor/types'

interface PlaceholderSectionEditProps {
  type: SectionType
}

export default function PlaceholderSectionEdit({ type }: PlaceholderSectionEditProps) {
  const key = type === 'blog' ? 'blog' : type
  return (
    <section className="section-pad border-y border-dashed border-gray-200 bg-gray-50">
      <div className="site-container">
        <SectionHeaderEdit sectionKey={key} />
        <p className="text-center text-sm text-gray-500">
          {getSectionLabel(type)} section — add content via CMS collections or configure in a future update.
        </p>
      </div>
    </section>
  )
}
