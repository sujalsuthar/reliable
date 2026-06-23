import { NextResponse } from 'next/server'

import { requireAdminSession } from '@/lib/cms/api-auth'
import { getStore } from '@/lib/cms/store'

export async function GET() {
  const authError = await requireAdminSession()
  if (authError) return authError

  const store = await getStore()

  return NextResponse.json({
    blogPosts: store.blogPosts.length,
    activeCareers: store.careers.filter((c) => c.status === 'active').length,
    newEnquiries: store.enquiries.filter((e) => e.status === 'new').length,
    services: store.services.filter((s) => s.status !== 'inactive').length,
    industries: store.industries.filter((i) => i.status !== 'inactive').length,
    projects: store.projects.length,
    recentEnquiries: [...store.enquiries]
      .sort((a, b) => b.submittedAt.localeCompare(a.submittedAt))
      .slice(0, 5),
    recentBlogPosts: [...store.blogPosts]
      .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
      .slice(0, 5),
  })
}
