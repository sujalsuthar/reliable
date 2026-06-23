/**
 * Dot-notation field path resolver for the CMS store.
 * @module cms/editor/field-path
 */

import type { CmsStore } from '@/lib/cms/types'
import type { ButtonFieldValue, FieldStyle, ImageFieldValue } from '@/lib/cms/editor/types'

type PathSegment = string | number

function parsePath(path: string): PathSegment[] {
  return path.split('.').map((part) => {
    const index = Number(part)
    return Number.isInteger(index) && String(index) === part ? index : part
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getAtPath(root: any, path: string): unknown {
  const segments = parsePath(path)
  let current = root
  for (const segment of segments) {
    if (current == null) return undefined
    current = current[segment]
  }
  return current
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setAtPath(root: any, path: string, value: unknown): any {
  const segments = parsePath(path)
  const clone = structuredClone(root)
  let current = clone

  for (let i = 0; i < segments.length - 1; i++) {
    const segment = segments[i]
    const next = segments[i + 1]
    if (current[segment] == null) {
      current[segment] = typeof next === 'number' ? [] : {}
    }
    current = current[segment]
  }

  const last = segments[segments.length - 1]
  current[last] = value
  return clone
}

/** Resolves virtual composite fields (buttons, images) for the editor */
export function resolveFieldValue(store: CmsStore, path: string): unknown {
  if (path === 'hero.primaryButton') {
    return {
      text: store.hero.primaryButtonText ?? '',
      href: store.hero.primaryButtonLink ?? '',
      openInNewTab: false,
      variant: 'primary',
    } satisfies ButtonFieldValue
  }
  if (path === 'hero.secondaryButton') {
    return {
      text: store.hero.secondaryButtonText ?? '',
      href: store.hero.secondaryButtonLink ?? '',
      openInNewTab: false,
      variant: 'outline',
    } satisfies ButtonFieldValue
  }
  if (path === 'ctaBanner.secondaryButton') {
    return {
      text: store.ctaBanner.secondaryButtonText,
      href: store.ctaBanner.secondaryButtonLink,
      openInNewTab: false,
      variant: 'outline',
    } satisfies ButtonFieldValue
  }
  if (path === 'hero.backgroundImage') {
    const bg = store.hero.backgroundImage
    return {
      src: bg?.src ?? '',
      alt: bg?.alt ?? '',
      caption: '',
    } satisfies ImageFieldValue
  }

  return getStoreField(store, path)
}

export function getStoreField(store: CmsStore, path: string): unknown {
  if (path.startsWith('fieldStyles.')) {
    const stylePath = path.replace('fieldStyles.', '')
    return store.fieldStyles[stylePath]
  }
  return getAtPath(store, path)
}

export function setStoreField(
  store: CmsStore,
  path: string,
  value: unknown,
): CmsStore {
  let nextValue = value
  if (
    path === 'globalContent.logoUrl' &&
    nextValue &&
    typeof nextValue === 'object' &&
    'src' in nextValue
  ) {
    nextValue = (nextValue as { src: string }).src
  }

  if (path.startsWith('fieldStyles.')) {
    const stylePath = path.replace('fieldStyles.', '')
    return {
      ...store,
      fieldStyles: {
        ...store.fieldStyles,
        [stylePath]: nextValue as FieldStyle,
      },
    }
  }

  if (path === 'hero.backgroundImage' && nextValue && typeof nextValue === 'object') {
    const img = nextValue as ImageFieldValue
    return setAtPath(store, 'hero.backgroundImage', {
      _type: 'image',
      src: img.src,
      alt: img.alt,
    }) as CmsStore
  }

  return setAtPath(store, path, nextValue) as CmsStore
}

export function getFieldStyle(store: CmsStore, contentPath: string): FieldStyle {
  return store.fieldStyles[contentPath] ?? {}
}

export function fieldStyleToCss(style: FieldStyle): Record<string, string | undefined> {
  return {
    fontSize: style.fontSize,
    fontWeight: style.fontWeight,
    color: style.color,
    textAlign: style.textAlign,
  }
}

export type { ButtonFieldValue, ImageFieldValue, FieldStyle }
