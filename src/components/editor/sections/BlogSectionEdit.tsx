'use client'

import Link from 'next/link'

import SectionHeaderEdit from '@/components/editor/sections/SectionHeaderEdit'
import { useEditor } from '@/components/editor/EditorProvider'

export default function BlogSectionEdit() {
  const { store } = useEditor()
  const posts = store.blogPosts.filter((p) => p.status === 'published')

  return (
    <section className="section-pad bg-gray-50">
      <div className="site-container">
        <SectionHeaderEdit sectionKey="blog" />
        {posts.length === 0 ? (
          <p className="text-center text-sm text-gray-500">
            No published posts yet. Add posts in CMS → Blog Posts.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post._id} className="card-base p-6">
                <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                {post.excerpt && (
                  <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
                )}
              </article>
            ))}
          </div>
        )}
        <div className="mt-8 text-center">
          <Link href="/admin/blog-posts" className="text-sm font-medium text-[#2563eb] hover:underline">
            Manage blog posts in CMS →
          </Link>
        </div>
      </div>
    </section>
  )
}
