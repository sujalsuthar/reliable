'use client'

import { Loader2, Save } from 'lucide-react'
import { FormEvent, useEffect, useState } from 'react'

import AdminHeader from '@/components/admin/AdminHeader'
import BilingualField from '@/components/admin/BilingualField'
import { createDefaultPageSeo, PAGE_SEO_KEYS, type PageSeoEntry, type PageSeoMap } from '@/lib/cms/page-seo'

type PageSeoFormState = Record<string, string>

function entryToForm(entry: PageSeoEntry): PageSeoFormState {
  return {
    seoTitle: entry.seoTitle ?? '',
    seoTitleAr: entry.seoTitleAr ?? '',
    seoTitleAlt: entry.seoTitleAlt ?? '',
    seoTitleAltAr: entry.seoTitleAltAr ?? '',
    seoDescription: entry.seoDescription ?? '',
    seoDescriptionAr: entry.seoDescriptionAr ?? '',
    seoDescriptionAlt: entry.seoDescriptionAlt ?? '',
    seoDescriptionAltAr: entry.seoDescriptionAltAr ?? '',
    seoKeywords: entry.seoKeywords ?? '',
    seoKeywordsAr: entry.seoKeywordsAr ?? '',
  }
}

function prefixKey(pageKey: string, field: string) {
  return `${pageKey}__${field}`
}

export default function PageSeoForm() {
  const [values, setValues] = useState<PageSeoFormState>({})
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/cms/singleton/pageSeo')
      .then((res) => res.json())
      .then((json) => {
        const data = json.data as PageSeoMap
        const next: PageSeoFormState = {}
        for (const key of PAGE_SEO_KEYS) {
          const entry = data[key]
          const form = entryToForm(entry)
          for (const [field, value] of Object.entries(form)) {
            next[prefixKey(key, field)] = value
          }
        }
        setValues(next)
      })
      .finally(() => setIsLoading(false))
  }, [])

  const setField = (pageKey: string, field: string, value: string) => {
    setValues((prev) => ({ ...prev, [prefixKey(pageKey, field)]: value }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setIsSaving(true)
    setMessage('')

    const defaults = createDefaultPageSeo()
    const payload: PageSeoMap = {} as PageSeoMap
    for (const key of PAGE_SEO_KEYS) {
      payload[key] = {
        ...defaults[key],
        seoTitle: values[prefixKey(key, 'seoTitle')],
        seoTitleAr: values[prefixKey(key, 'seoTitleAr')],
        seoTitleAlt: values[prefixKey(key, 'seoTitleAlt')],
        seoTitleAltAr: values[prefixKey(key, 'seoTitleAltAr')],
        seoDescription: values[prefixKey(key, 'seoDescription')],
        seoDescriptionAr: values[prefixKey(key, 'seoDescriptionAr')],
        seoDescriptionAlt: values[prefixKey(key, 'seoDescriptionAlt')],
        seoDescriptionAltAr: values[prefixKey(key, 'seoDescriptionAltAr')],
        seoKeywords: values[prefixKey(key, 'seoKeywords')],
        seoKeywordsAr: values[prefixKey(key, 'seoKeywordsAr')],
      }
    }

    const res = await fetch('/api/cms/singleton/pageSeo', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    setIsSaving(false)
    if (!res.ok) {
      const json = (await res.json()) as { error?: string }
      setMessage(json.error ?? 'Failed to save SEO settings.')
      return
    }
    setMessage('Page SEO settings saved.')
  }

  if (isLoading) return <p className="text-sm text-gray-500">Loading...</p>

  return (
    <div>
      <AdminHeader
        title="Page SEO"
        description="Manage meta titles, descriptions, keywords, and alternate social titles for every page."
      />

      <form onSubmit={handleSubmit} className="max-w-4xl space-y-8">
        {PAGE_SEO_KEYS.map((pageKey) => {
          const label =
            pageKey === 'home'
              ? 'Homepage'
              : pageKey.charAt(0).toUpperCase() + pageKey.slice(1).replace('-', ' ')

          return (
            <section
              key={pageKey}
              className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{label}</h2>
                <p className="text-sm text-gray-500">Path: /{pageKey === 'home' ? '' : pageKey}</p>
              </div>

              <BilingualField
                label="Meta Title"
                enValue={values[prefixKey(pageKey, 'seoTitle')] ?? ''}
                arValue={values[prefixKey(pageKey, 'seoTitleAr')] ?? ''}
                onEnChange={(v) => setField(pageKey, 'seoTitle', v)}
                onArChange={(v) => setField(pageKey, 'seoTitleAr', v)}
              />

              <BilingualField
                label="Alternate Meta Title (Social / Open Graph)"
                enValue={values[prefixKey(pageKey, 'seoTitleAlt')] ?? ''}
                arValue={values[prefixKey(pageKey, 'seoTitleAltAr')] ?? ''}
                onEnChange={(v) => setField(pageKey, 'seoTitleAlt', v)}
                onArChange={(v) => setField(pageKey, 'seoTitleAltAr', v)}
              />

              <BilingualField
                label="Meta Description"
                enValue={values[prefixKey(pageKey, 'seoDescription')] ?? ''}
                arValue={values[prefixKey(pageKey, 'seoDescriptionAr')] ?? ''}
                onEnChange={(v) => setField(pageKey, 'seoDescription', v)}
                onArChange={(v) => setField(pageKey, 'seoDescriptionAr', v)}
                type="textarea"
                rows={3}
              />

              <BilingualField
                label="Alternate Meta Description (Social / Open Graph)"
                enValue={values[prefixKey(pageKey, 'seoDescriptionAlt')] ?? ''}
                arValue={values[prefixKey(pageKey, 'seoDescriptionAltAr')] ?? ''}
                onEnChange={(v) => setField(pageKey, 'seoDescriptionAlt', v)}
                onArChange={(v) => setField(pageKey, 'seoDescriptionAltAr', v)}
                type="textarea"
                rows={3}
              />

              <BilingualField
                label="Meta Keywords"
                enValue={values[prefixKey(pageKey, 'seoKeywords')] ?? ''}
                arValue={values[prefixKey(pageKey, 'seoKeywordsAr')] ?? ''}
                onEnChange={(v) => setField(pageKey, 'seoKeywords', v)}
                onArChange={(v) => setField(pageKey, 'seoKeywordsAr', v)}
                type="textarea"
                rows={2}
                placeholder="keyword one, keyword two, keyword three"
              />
            </section>
          )
        })}

        {message && (
          <p className={`text-sm ${message.includes('Failed') ? 'text-red-600' : 'text-green-600'}`}>
            {message}
          </p>
        )}

        <button type="submit" disabled={isSaving} className="btn-primary inline-flex gap-2">
          {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          Save All Page SEO
        </button>
      </form>
    </div>
  )
}
