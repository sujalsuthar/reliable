'use client'

import Editable from '@/components/editor/Editable'
import { useEditor } from '@/components/editor/EditorProvider'
import SectionLabel from '@/components/ui/SectionLabel'

interface SectionHeaderEditProps {
  sectionKey: string
}

export default function SectionHeaderEdit({ sectionKey }: SectionHeaderEditProps) {
  const { store } = useEditor()
  const content = store.sectionContent[sectionKey] ?? {
    label: 'Section',
    title: 'Section Title',
    description: 'Section description',
  }

  return (
    <div className="mb-12 text-center">
      <Editable
        path={`sectionContent.${sectionKey}.label`}
        type="text"
        label="Section Label"
        as="span"
        className="inline-block"
      >
        <SectionLabel className="mx-auto">{content.label}</SectionLabel>
      </Editable>
      <Editable
        path={`sectionContent.${sectionKey}.title`}
        type="text"
        label="Section Title"
        as="h2"
        className="section-title mx-auto mt-4"
      >
        {content.title}
      </Editable>
      <Editable
        path={`sectionContent.${sectionKey}.description`}
        type="richtext"
        label="Section Description"
        as="p"
        className="section-subtitle mx-auto"
      >
        {content.description}
      </Editable>
    </div>
  )
}
