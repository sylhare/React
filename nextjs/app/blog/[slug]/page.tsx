import { getPost } from '@/lib/post/getPosts';
import Link from 'next/link';
import React from 'react';

export default async function BlogPostPage({ params }: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
            {post.title}
          </h1>
          <time className="text-sm text-gray-500 dark:text-gray-400" dateTime={post.date}>
            {post.date}
          </time>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
            {post.content}
          </p>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Link
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            href="/blog"
          >
            Back to Blog
          </Link>
        </div>
      </article>
    </div>
  )
}