'use client'

import { clsx } from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { useLocale } from '@/components/providers/LocaleProvider'

interface ServicesMegaMenuProps {
  open: boolean
  onClose: () => void
  imageUrl?: string
}

export default function ServicesMegaMenu({
  open,
  onClose,
  imageUrl,
}: ServicesMegaMenuProps) {
  const { messages } = useLocale()
  const serviceMenu = messages.serviceMenu

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="mx-auto max-w-[1320px]"
        >
          <div className="relative overflow-hidden rounded-2xl border border-primary-100 bg-primary-50 shadow-mega">
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-700"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>

            <div className="grid grid-cols-12 gap-0">
              <div className="relative col-span-4 overflow-hidden bg-gradient-to-br from-primary-900 to-primary-800 p-8 text-white">
                {imageUrl && (
                  <>
                    <Image
                      src={imageUrl}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                    <div className="absolute inset-0 bg-primary-900/80" aria-hidden />
                  </>
                )}

                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent-400">
                    {messages.nav.megaEyebrow}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold leading-snug">
                    {messages.nav.megaTitle}
                  </h3>
                  <p className="mt-3 text-xs uppercase tracking-wide text-white/60">
                    {messages.nav.megaTagline}
                  </p>
                  <Link
                    href="/services"
                    onClick={onClose}
                    className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-accent-400 hover:text-white"
                  >
                    {messages.nav.viewAllServices}
                    <ChevronRight className="icon-rtl-flip h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>

              <div className="col-span-8 grid grid-cols-1 gap-x-8 gap-y-6 p-8 pr-14 sm:grid-cols-2 xl:grid-cols-3">
                {serviceMenu.map((group) => (
                  <div key={group.title}>
                    <Link
                      href={group.href}
                      onClick={onClose}
                      className="text-sm font-semibold text-primary-700 hover:text-primary-600"
                    >
                      {group.title}
                    </Link>
                    <ul className="mt-3 space-y-2">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            onClick={onClose}
                            className="group inline-flex min-h-[36px] items-center gap-1.5 text-sm text-gray-600 transition-colors hover:text-primary-600"
                          >
                            <ChevronRight
                              className="icon-rtl-flip h-3.5 w-3.5 text-primary-500 opacity-70 group-hover:opacity-100"
                              aria-hidden
                            />
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function ServicesMobileLinks({
  onNavigate,
  className,
}: {
  onNavigate: () => void
  className?: string
}) {
  const { messages } = useLocale()
  const serviceMenu = messages.serviceMenu

  return (
    <div className={clsx('space-y-6', className)}>
      {serviceMenu.map((group) => (
        <div key={group.title}>
          <p className="text-sm font-semibold text-primary-700">{group.title}</p>
          <ul className="mt-2 space-y-1">
            {group.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className="flex min-h-[44px] items-center gap-2 text-base text-gray-700"
                >
                  <ChevronRight className="icon-rtl-flip h-4 w-4 text-primary-500" aria-hidden />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Link
        href="/services"
        onClick={onNavigate}
        className="inline-flex min-h-[44px] items-center gap-1 text-base font-medium text-primary-600"
      >
        {messages.nav.viewAllServices}
        <ChevronRight className="icon-rtl-flip h-4 w-4" aria-hidden />
      </Link>
    </div>
  )
}
