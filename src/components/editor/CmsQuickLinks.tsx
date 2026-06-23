'use client'

import Link from 'next/link'
import {
  FileText,
  FolderKanban,
  Layout,
  Menu,
  Wrench,
} from 'lucide-react'

import { ADMIN_NAV } from '@/lib/cms/navigation'

const ICONS: Record<string, typeof Wrench> = {
  'blog-posts': FileText,
  'case-studies': FolderKanban,
  services: Wrench,
}

export default function CmsQuickLinks() {
  const contentLinks = ADMIN_NAV.find((s) => s.title === 'CONTENT')?.items ?? []
  const siteLinks = ADMIN_NAV.find((s) => s.title === 'SITE')?.items ?? []

  return (
    <div className="space-y-4">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        Edit Everything
      </h3>
      <p className="text-xs text-gray-500">
        Full CMS access — blog, services, navbar links, footer, and more.
      </p>

      <div className="space-y-1">
        <p className="text-[10px] font-semibold uppercase text-gray-400">Content</p>
        {contentLinks.map((item) => {
          const Icon = ICONS[item.href.split('/').pop() ?? ''] ?? Layout
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 rounded-lg px-2 py-2 text-xs text-gray-700 hover:bg-gray-50"
            >
              <Icon className="h-3.5 w-3.5 text-[#2563eb]" />
              {item.label}
            </Link>
          )
        })}
      </div>

      <div className="space-y-1">
        <p className="text-[10px] font-semibold uppercase text-gray-400">Site</p>
        {siteLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-2 rounded-lg px-2 py-2 text-xs text-gray-700 hover:bg-gray-50"
          >
            <Layout className="h-3.5 w-3.5 text-[#2563eb]" />
            {item.label}
          </Link>
        ))}
      </div>

      <div className="rounded-lg border border-blue-100 bg-blue-50 p-3 text-xs text-blue-800">
        <p className="flex items-center gap-1.5 font-medium">
          <Menu className="h-3.5 w-3.5" />
          Navbar & Footer
        </p>
        <p className="mt-1 text-blue-700">
          Use the <strong>Navbar & Footer</strong> tab above the preview to edit menu links, buttons, and footer content inline.
        </p>
      </div>
    </div>
  )
}
