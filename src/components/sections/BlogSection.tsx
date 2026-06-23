import Link from 'next/link'

import SectionHeader from '@/components/ui/SectionHeader'
import { getPublishedBlogPosts, getSectionContent } from '@/lib/content'
import { getLocale } from '@/lib/i18n/locale'
import { formatDate, getMessages } from '@/lib/i18n/messages'

export default async function BlogSection() {
  const locale = await getLocale()
  const ui = getMessages(locale)
  const [posts, header] = await Promise.all([
    getPublishedBlogPosts(),
    getSectionContent('blog'),
  ])

  if (posts.length === 0) return null

  return (
    <section className="section-pad bg-gray-50">
      <div className="site-container">
        <SectionHeader
          label={header?.label ?? 'Blog'}
          title={header?.title ?? 'Latest Insights'}
          description={
            header?.description ??
            'Engineering news, project updates, and industry perspectives from our team.'
          }
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="card-base block p-6 transition hover:shadow-hover"
            >
              <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
              {post.excerpt && (
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
              )}
              <p className="mt-4 text-xs text-gray-400">
                {formatDate(post.updatedAt, locale)}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/blog" className="btn-primary inline-flex px-6">
            {ui.sections.viewAllPosts}
          </Link>
        </div>
      </div>
    </section>
  )
}
