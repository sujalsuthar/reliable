'use client'

/**
 * Visual editor context — holds live CMS store and active field state.
 * @module components/editor/EditorProvider
 */

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import type { FieldType } from '@/lib/cms/editor/types'
import { resolveFieldValue } from '@/lib/cms/editor/field-path'
import type { CmsStore } from '@/lib/cms/types'

export interface ActiveField {
  path: string
  type: FieldType
  label: string
}

interface EditorContextValue {
  store: CmsStore
  isEditing: boolean
  activeField: ActiveField | null
  isSaving: boolean
  setActiveField: (field: ActiveField | null) => void
  updateField: (path: string, value: unknown) => Promise<void>
  refreshStore: () => Promise<void>
  getFieldValue: (path: string) => unknown
}

const EditorContext = createContext<EditorContextValue | null>(null)

export function useEditor() {
  const ctx = useContext(EditorContext)
  if (!ctx) {
    throw new Error('useEditor must be used within EditorProvider')
  }
  return ctx
}

export function useEditorOptional() {
  return useContext(EditorContext)
}

interface EditorProviderProps {
  children: ReactNode
  initialStore: CmsStore
  isEditing?: boolean
}

export default function EditorProvider({
  children,
  initialStore,
  isEditing = false,
}: EditorProviderProps) {
  const [store, setStore] = useState(initialStore)
  const [activeField, setActiveField] = useState<ActiveField | null>(null)
  const [isSaving, setIsSaving] = useState(false)

  const refreshStore = useCallback(async () => {
    const res = await fetch('/api/cms/editor/store')
    if (res.ok) {
      const data = (await res.json()) as { store: CmsStore }
      setStore(data.store)
    }
  }, [])

  const updateField = useCallback(async (path: string, value: unknown) => {
    setIsSaving(true)
    try {
      const res = await fetch('/api/cms/editor/field', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path, value }),
      })
      if (res.ok) {
        const data = (await res.json()) as { store: CmsStore }
        setStore(data.store)
      }
    } finally {
      setIsSaving(false)
    }
  }, [])

  const getFieldValue = useCallback(
    (path: string) => resolveFieldValue(store, path),
    [store],
  )

  const value = useMemo(
    () => ({
      store,
      isEditing,
      activeField,
      isSaving,
      setActiveField,
      updateField,
      refreshStore,
      getFieldValue,
    }),
    [store, isEditing, activeField, isSaving, updateField, refreshStore, getFieldValue],
  )

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
}
