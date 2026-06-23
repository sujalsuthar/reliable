'use client'

import { clsx } from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export interface NavDropdownItem {
  label: string
  href: string
}

interface NavDropdownProps {
  label: string
  items: NavDropdownItem[]
  isOpen: boolean
  isActive: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
}

export default function NavDropdown({
  label,
  items,
  isOpen,
  isActive,
  onOpen,
  onClose,
  onToggle,
}: NavDropdownProps) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        className={clsx(
          'nav-link inline-flex items-center gap-1',
          isActive || isOpen
            ? 'nav-link-active font-medium text-[#2563eb]'
            : 'font-normal text-gray-800',
        )}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        {label}
        <ChevronDown
          className={clsx(
            'h-3.5 w-3.5 transition-transform duration-200',
            isOpen && 'rotate-180',
          )}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute left-1/2 top-full z-50 min-w-[220px] -translate-x-1/2 pt-3"
          >
            <div className="rounded-2xl border border-primary-100 bg-[#f0f7ff] p-2 shadow-[0_8px_30px_rgba(37,99,235,0.12)]">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-[15px] font-medium text-[#2563eb] transition-colors hover:bg-white/80"
              >
                <ChevronRight className="icon-rtl-flip h-4 w-4 shrink-0" aria-hidden />
                {item.label}
              </Link>
            ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
