'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ShieldCheck } from 'lucide-react'

import Editable from '@/components/editor/Editable'
import { useEditor } from '@/components/editor/EditorProvider'
import HeroBackground from '@/components/sections/HeroBackground'
import HeroFloatingCircles from '@/components/sections/HeroFloatingCircles'
import { getImageUrl } from '@/lib/images'
function parseHeadline(headline: string, highlightedWord?: string) {
  if (highlightedWord && headline.includes(highlightedWord)) {
    const prefix = headline.slice(0, headline.indexOf(highlightedWord)).trim()
    return { prefix: prefix || headline, highlight: highlightedWord }
  }
  const colonIndex = headline.indexOf(':')
  if (colonIndex !== -1) {
    return {
      prefix: headline.slice(0, colonIndex + 1).trim(),
      highlight: headline.slice(colonIndex + 1).trim(),
    }
  }
  return { prefix: headline, highlight: '' }
}

export default function HeroSectionEdit() {
  const { store } = useEditor()
  const hero = store.hero
  const parsed = parseHeadline(hero.headline, hero.highlightedWord)
  const backgroundImageUrl = getImageUrl(hero.backgroundImage)

  return (
    <section className="relative flex min-h-[calc(100vh-76px)] w-full items-center overflow-hidden bg-primary-900 lg:min-h-[560px]">
      <HeroBackground />
      {backgroundImageUrl && (
        <Image
          src={backgroundImageUrl}
          alt={hero.backgroundImage?.alt ?? ''}
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-primary-900/50" aria-hidden />
      <HeroFloatingCircles />

      <div className="site-container relative z-10 py-16 sm:py-20">
        <div className="max-w-2xl text-left">
          <Editable path="hero.backgroundImage" type="image" label="Background Image" className="absolute inset-0 -z-10 opacity-0" as="span">
            <span className="sr-only">Edit background</span>
          </Editable>

          {hero.eyebrow && (
            <Editable path="hero.eyebrow" type="text" label="Eyebrow" as="span" className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-primary-800/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-accent-400">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {hero.eyebrow}
            </Editable>
          )}

          <h1 className="text-[32px] font-semibold leading-[1.15] text-white sm:text-[42px] lg:text-[52px]">
            <Editable path="hero.headline" type="text" label="Headline" as="span" className="block">
              {parsed.prefix}
            </Editable>
            {parsed.highlight && (
              <Editable path="hero.highlightedWord" type="text" label="Highlighted Word" as="span" className="mt-1 block text-accent-400">
                {parsed.highlight}
              </Editable>
            )}
          </h1>

          {hero.subheadline && (
            <Editable path="hero.subheadline" type="richtext" label="Subheadline" as="p" className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-[17px]">
              {hero.subheadline}
            </Editable>
          )}

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Editable path="hero.primaryButton" type="button" label="Primary Button" as="span">
              <Link
                href={hero.primaryButtonLink ?? '#'}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-[15px] font-medium text-gray-900"
                onClick={(e) => e.preventDefault()}
              >
                {hero.primaryButtonText}
                <ChevronRight className="h-4 w-4" aria-hidden />
              </Link>
            </Editable>
            <Editable path="hero.secondaryButton" type="button" label="Secondary Button" as="span">
              <Link
                href={hero.secondaryButtonLink ?? '#'}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-accent-400/50 px-8 py-3 text-[15px] font-medium text-white"
                onClick={(e) => e.preventDefault()}
              >
                {hero.secondaryButtonText}
              </Link>
            </Editable>
          </div>

          {hero.stats && hero.stats.length > 0 && (
            <div className="mt-16 hidden gap-8 sm:grid md:flex md:gap-14">
              {hero.stats.map((stat, index) => (
                <div key={stat._key ?? index}>
                  <Editable path={`hero.stats.${index}.number`} type="text" label={`Stat ${index + 1} Number`} as="p" className="text-2xl font-bold text-accent-400 md:text-3xl">
                    {stat.number}
                  </Editable>
                  <Editable path={`hero.stats.${index}.label`} type="text" label={`Stat ${index + 1} Label`} as="p" className="mt-1 text-sm text-white/55">
                    {stat.label}
                  </Editable>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
