import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers,
  Network,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'

import SectionLabel from '@/components/ui/SectionLabel'

const KEY_BENEFIT_ICONS: LucideIcon[] = [ShieldCheck, Network, Layers, Clock]

interface BenefitItem {
  title: string
  description: string
}

interface ServiceKeyBenefitsSectionProps {
  label: string
  title: string
  highlight?: string
  subtitle?: string
  items: BenefitItem[]
  ctaTitle?: string
  ctaDescription?: string
  ctaButton?: string
  ctaLink?: string
}

function TitleWithHighlight({ title, highlight }: { title: string; highlight?: string }) {
  if (!highlight || !title.includes(highlight)) {
    return <>{title}</>
  }

  const index = title.indexOf(highlight)
  return (
    <>
      {title.slice(0, index)}
      <span className="text-accent-400">{highlight}</span>
      {title.slice(index + highlight.length)}
    </>
  )
}

export default function ServiceKeyBenefitsSection({
  label,
  title,
  highlight,
  subtitle,
  items,
  ctaTitle,
  ctaDescription,
  ctaButton,
  ctaLink = '/contact',
}: ServiceKeyBenefitsSectionProps) {
  if (!items.length && !ctaTitle) return null

  return (
    <>
      {items.length > 0 && (
        <section className="section-pad bg-primary-950 text-white">
          <div className="site-container">
            <div className="mx-auto max-w-4xl text-center">
              <SectionLabel className="border-0 bg-primary-600 px-4 py-1.5 text-[11px] font-semibold tracking-widest text-white">
                {label}
              </SectionLabel>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[34px]">
                <TitleWithHighlight title={title} highlight={highlight} />
              </h2>
              {subtitle ? (
                <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60 sm:text-[17px]">
                  {subtitle}
                </p>
              ) : null}
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {items.map((item, index) => {
                const Icon = KEY_BENEFIT_ICONS[index % KEY_BENEFIT_ICONS.length]

                return (
                  <div key={item.title} className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 shadow-[0_4px_14px_rgba(77,163,255,0.35)]">
                      <Icon className="h-6 w-6 text-white" aria-hidden />
                    </div>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {ctaTitle ? (
        <section className="bg-primary-600 py-14 text-white sm:py-16">
          <div className="site-container text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[34px]">
              {ctaTitle}
            </h2>
            {ctaDescription ? (
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 sm:text-[17px]">
                {ctaDescription}
              </p>
            ) : null}
            <Link
              href={ctaLink}
              className="mt-8 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-600 transition-colors hover:bg-primary-50"
            >
              {ctaButton}
              <ArrowRight className="icon-rtl-flip h-4 w-4" aria-hidden />
            </Link>
          </div>
        </section>
      ) : null}
    </>
  )
}

export function ServiceBenefitsGrid({
  label,
  title,
  highlight,
  items,
}: {
  label: string
  title: string
  highlight?: string
  items: BenefitItem[]
}) {
  if (!items.length) return null

  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel className="mx-auto">{label}</SectionLabel>
          <h2 className="section-title mx-auto mt-4">
            <TitleWithHighlight title={title} highlight={highlight} />
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-start gap-4 rounded-card border border-gray-100 bg-white p-6 shadow-card"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-600">
                <CheckCircle2 className="h-5 w-5 text-white" aria-hidden />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServiceProcessGrid({
  label,
  title,
  steps,
}: {
  label: string
  title: string
  steps: string[]
}) {
  if (!steps.length) return null

  return (
    <section className="section-pad bg-gray-50">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel className="mx-auto">{label}</SectionLabel>
          <h2 className="section-title mx-auto mt-4">{title}</h2>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step}
              className="flex flex-col gap-4 rounded-card border border-gray-100 bg-white p-6 shadow-card"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-600 text-sm font-semibold text-white">
                {index + 1}
              </span>
              <p className="text-sm leading-relaxed text-gray-600">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
