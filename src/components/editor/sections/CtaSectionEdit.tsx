'use client'

import Link from 'next/link'

import Editable from '@/components/editor/Editable'
import { useEditor } from '@/components/editor/EditorProvider'

export default function CtaSectionEdit() {
  const { store } = useEditor()
  const cta = store.ctaBanner

  return (
    <section className="section-pad bg-primary-900 text-white">
      <div className="site-container text-center">
        <Editable path="ctaBanner.title" type="text" label="CTA Title" as="h2" className="text-2xl font-semibold sm:text-3xl">
          {cta.title}
        </Editable>
        <Editable path="ctaBanner.description" type="richtext" label="CTA Description" as="p" className="mx-auto mt-4 max-w-xl text-white/65">
          {cta.description}
        </Editable>

        <div className="mx-auto mt-10 max-w-xl rounded-lg border border-dashed border-white/20 p-6 text-sm text-white/50">
          Email capture form (functional on live site)
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Editable path="ctaBanner.secondaryButton" type="button" label="Secondary Button" as="span">
            <Link
              href={cta.secondaryButtonLink}
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/30 px-6 text-sm font-medium text-white"
              onClick={(e) => e.preventDefault()}
            >
              {cta.secondaryButtonText}
            </Link>
          </Editable>
        </div>
      </div>
    </section>
  )
}
