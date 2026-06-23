import type { SanityImage } from '@/lib/types'

export function getImageUrl(image?: SanityImage | string | null): string | null {
  if (!image) return null
  if (typeof image === 'string') return image
  if (image.src) return image.src
  return null
}
