import type { PortableTextBlock } from '@portabletext/types'

export function block(text: string, key: string): PortableTextBlock {
  return {
    _type: 'block',
    _key: key,
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: `${key}-span`, text, marks: [] }],
  }
}

export function blocks(...paragraphs: string[]): PortableTextBlock[] {
  return paragraphs.map((text, i) => block(text, `b${i}`))
}

export function blocksToText(value?: PortableTextBlock[]): string {
  if (!value?.length) return ''

  return value
    .map((item) =>
      item.children
        ?.map((child) => ('text' in child ? child.text : ''))
        .join('') ?? '',
    )
    .join('\n\n')
}

export function textToBlocks(text: string): PortableTextBlock[] {
  return blocks(...text.split(/\n\n+/).map((p) => p.trim()).filter(Boolean))
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
}
