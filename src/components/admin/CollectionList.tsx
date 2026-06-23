'use client'

import { Pencil, Plus, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

import AdminHeader from '@/components/admin/AdminHeader'
import StatusBadge from '@/components/admin/StatusBadge'
import type { CollectionConfig } from '@/lib/cms/collections'
import { ADMIN_PATH_TO_COLLECTION } from '@/lib/cms/navigation'

interface CollectionListProps {
  config: CollectionConfig
  pathKey: string
}

function getCellValue(item: Record<string, unknown>, key: string): string {
  const value = item[key]

  if (value == null) return '—'
  if (typeof value === 'boolean') return value ? 'Yes' : 'No'
  if (typeof value === 'object' && value && 'current' in value) {
    return String((value as { current: string }).current)
  }
  if (key === 'updatedAt' || key === 'submittedAt') {
    return new Date(String(value)).toLocaleDateString()
  }
  if (key === 'title' && item.titleAr) {
    return `${String(value)}\n${String(item.titleAr)}`
  }
  return String(value)
}

export default function CollectionList({ config, pathKey }: CollectionListProps) {
  const router = useRouter()
  const [items, setItems] = useState<Record<string, unknown>[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const collectionApiPath = pathKey

  const loadItems = useCallback(async () => {
    setIsLoading(true)
    setError('')
    try {
      const res = await fetch(`/api/cms/${collectionApiPath}`)
      if (!res.ok) throw new Error('Failed to load')
      const data = (await res.json()) as { items: Record<string, unknown>[] }
      setItems(data.items)
    } catch {
      setError('Could not load items.')
    } finally {
      setIsLoading(false)
    }
  }, [collectionApiPath])

  useEffect(() => {
    loadItems()
  }, [loadItems])

  const handleDelete = async (id: string) => {
    if (!confirm(`Delete this ${config.singular.toLowerCase()}?`)) return

    const res = await fetch(`/api/cms/${collectionApiPath}/${id}`, {
      method: 'DELETE',
    })

    if (res.ok) {
      setItems((prev) => prev.filter((item) => item._id !== id))
    }
  }

  return (
    <div>
      <AdminHeader
        title={config.label}
        description={config.description}
        action={
          !config.readOnly ? (
            <Link
              href={`/admin/${pathKey}/new`}
              className="btn-primary inline-flex gap-2"
            >
              <Plus className="h-4 w-4" aria-hidden />
              Add {config.singular}
            </Link>
          ) : undefined
        }
      />

      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {config.listColumns.map((col) => (
                <th
                  key={col.key}
                  className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
                >
                  {col.label}
                </th>
              ))}
              <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {isLoading ? (
              <tr>
                <td colSpan={config.listColumns.length + 1} className="px-5 py-10 text-center text-sm text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : items.length === 0 ? (
              <tr>
                <td colSpan={config.listColumns.length + 1} className="px-5 py-10 text-center text-sm text-gray-500">
                  No items yet.
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={String(item._id)} className="hover:bg-gray-50/80">
                  {config.listColumns.map((col) => (
                    <td key={col.key} className="px-5 py-4 text-sm text-gray-700">
                      {col.key === 'status' ? (
                        <StatusBadge status={String(item.status ?? 'active')} />
                      ) : col.key === 'title' || col.key === 'name' ? (
                        <div className="whitespace-pre-line font-medium text-gray-900">
                          {getCellValue(item, col.key)}
                        </div>
                      ) : (
                        getCellValue(item, col.key)
                      )}
                    </td>
                  ))}
                  <td className="px-5 py-4 text-right">
                    <div className="inline-flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => router.push(`/admin/${pathKey}/${item._id}`)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-primary-600 hover:bg-primary-50"
                        aria-label="Edit"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      {!config.readOnly && (
                        <button
                          type="button"
                          onClick={() => handleDelete(String(item._id))}
                          className="inline-flex h-8 items-center gap-1 rounded-lg bg-red-50 px-2.5 text-xs font-medium text-red-600 hover:bg-red-100"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          Delete
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function getPathKeyForCollection(collection: string): string {
  const entry = Object.entries(ADMIN_PATH_TO_COLLECTION).find(([, value]) => value === collection)
  return entry?.[0] ?? collection
}
