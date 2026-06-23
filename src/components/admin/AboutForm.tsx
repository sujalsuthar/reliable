'use client'

import { Loader2, Save } from 'lucide-react'
import { FormEvent, useEffect, useState } from 'react'

import AdminHeader from '@/components/admin/AdminHeader'

export default function AboutForm() {
  const [values, setValues] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/cms/singleton/pages')
      .then((res) => res.json())
      .then((json) => setValues(json.data as Record<string, string>))
      .finally(() => setIsLoading(false))
  }, [])

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setIsSaving(true)
    setMessage('')
    const res = await fetch('/api/cms/singleton/pages', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
    setIsSaving(false)
    setMessage(res.ok ? 'About page saved.' : 'Failed to save.')
  }

  if (isLoading) return <p className="text-sm text-gray-500">Loading...</p>

  return (
    <div>
      <AdminHeader
        title="About Us"
        description="Edit the About page content, plus privacy and terms pages."
      />
      <form onSubmit={handleSubmit} className="max-w-3xl space-y-8">
        {[
          { title: 'About Page', titleKey: 'aboutTitle', contentKey: 'aboutContent' },
          { title: 'Privacy Policy', titleKey: 'privacyTitle', contentKey: 'privacyContent' },
          { title: 'Terms of Service', titleKey: 'termsTitle', contentKey: 'termsContent' },
        ].map((section) => (
          <div key={section.titleKey} className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-gray-900">{section.title}</h2>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={values[section.titleKey] ?? ''}
                onChange={(e) => setValues((v) => ({ ...v, [section.titleKey]: e.target.value }))}
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Content</label>
              <textarea
                rows={8}
                value={values[section.contentKey] ?? ''}
                onChange={(e) => setValues((v) => ({ ...v, [section.contentKey]: e.target.value }))}
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm"
              />
            </div>
          </div>
        ))}

        {message && <p className="text-sm text-emerald-600">{message}</p>}

        <button type="submit" disabled={isSaving} className="btn-primary inline-flex gap-2">
          {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          Save Pages
        </button>
      </form>
    </div>
  )
}
