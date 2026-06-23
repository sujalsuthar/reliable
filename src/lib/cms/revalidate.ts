import { revalidatePath } from 'next/cache'

export function revalidatePublicContent() {
  revalidatePath('/', 'layout')
  const paths = [
    '/',
    '/about',
    '/services',
    '/projects',
    '/blog',
    '/contact',
    '/divisions',
    '/careers',
    '/privacy',
    '/terms',
  ]
  for (const path of paths) {
    revalidatePath(path)
  }
}
