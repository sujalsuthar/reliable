'use client'

import { clsx } from 'clsx'
import { ExternalLink, Layout, PanelLeft, PanelLeftClose } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import CmsQuickLinks from '@/components/editor/CmsQuickLinks'
import EditPanel from '@/components/editor/EditPanel'
import EditorProvider from '@/components/editor/EditorProvider'
import GlobalContentManager from '@/components/editor/GlobalContentManager'
import HomeCanvas from '@/components/editor/HomeCanvas'
import NavbarFooterCanvas from '@/components/editor/NavbarFooterCanvas'
import SectionManager from '@/components/editor/SectionManager'
import type { CmsStore } from '@/lib/cms/types'
import { LOGO_ALT } from '@/lib/brand'

type EditorView = 'homepage' | 'navbar-footer'

interface SiteEditorProps {
  initialStore: CmsStore
}

export default function SiteEditor({ initialStore }: SiteEditorProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [view, setView] = useState<EditorView>('homepage')
  const logoUrl = initialStore.globalContent?.logoUrl ?? '/logo.png'

  return (
    <EditorProvider initialStore={initialStore} isEditing>
      <div className="flex h-screen flex-col overflow-hidden bg-gray-100">
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen((v) => !v)}
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? (
                <PanelLeftClose className="h-5 w-5" />
              ) : (
                <PanelLeft className="h-5 w-5" />
              )}
            </button>
            <Image src={logoUrl} alt={LOGO_ALT} width={120} height={32} className="h-7 w-auto object-contain" />
            <span className="hidden text-sm font-semibold text-gray-900 sm:inline">
              Site Changes
            </span>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
              Live Editor
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/admin"
              className="hidden rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 sm:inline"
            >
              CMS Dashboard
            </Link>
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <ExternalLink className="h-4 w-4" />
              View Live Site
            </Link>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {sidebarOpen && (
            <aside className="flex w-[280px] shrink-0 flex-col overflow-y-auto border-r border-gray-200 bg-white p-4">
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-gray-900">
                <Layout className="h-4 w-4 text-[#2563eb]" />
                Visual Editor
              </div>

              <div className="mb-6 flex rounded-lg border border-gray-200 bg-gray-50 p-1">
                {(
                  [
                    ['homepage', 'Homepage'],
                    ['navbar-footer', 'Navbar & Footer'],
                  ] as const
                ).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setView(id)}
                    className={clsx(
                      'flex-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors',
                      view === id
                        ? 'bg-white text-[#2563eb] shadow-sm'
                        : 'text-gray-600 hover:text-gray-900',
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {view === 'homepage' ? (
                <>
                  <SectionManager />
                  <div className="my-6 border-t border-gray-100 pt-6">
                    <GlobalContentManager />
                  </div>
                </>
              ) : (
                <p className="mb-4 text-xs text-gray-500">
                  Click any navbar or footer text in the preview to edit. Links and buttons update on every page.
                </p>
              )}

              <div className="mt-auto border-t border-gray-100 pt-6">
                <CmsQuickLinks />
              </div>
            </aside>
          )}

          <div className="flex flex-1 overflow-hidden">
            <div className="flex-1 overflow-y-auto">
              {view === 'homepage' ? <HomeCanvas /> : <NavbarFooterCanvas />}
            </div>
            <EditPanel />
          </div>
        </div>
      </div>
    </EditorProvider>
  )
}
