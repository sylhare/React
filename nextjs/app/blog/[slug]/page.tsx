import { getPost } from '@/lib/post/getPosts';
import Link from 'next/link';
import React from 'react';

export default async function BlogPostPage({ params }: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5" href={`/blog`}>Back</Link>
    </div>
  )
}