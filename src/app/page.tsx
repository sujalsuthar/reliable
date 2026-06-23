import type { Metadata } from 'next'

import HomePageRenderer from '@/components/home/HomePageRenderer'
import { LOGO_PATH } from '@/lib/brand'
import { generateCmsPageMetadata } from '@/lib/seo'

export const revalidate = 0

export async function generateMetadata(): Promise<Metadata> {
  return generateCmsPageMetadata('home', { image: LOGO_PATH })
}

export default function Home() {
  return <HomePageRenderer />
}
