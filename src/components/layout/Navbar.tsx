import { getGlobalContent, getNavbarContent } from '@/lib/content'

import NavbarClient from './NavbarClient'

export default async function Navbar() {
  const [navbar, globalContent] = await Promise.all([
    getNavbarContent(),
    getGlobalContent(),
  ])

  return (
    <NavbarClient
      navbar={navbar}
      logoUrl={globalContent.logoUrl}
      megaMenuImageUrl={navbar.megaMenuImageUrl}
    />
  )
}
