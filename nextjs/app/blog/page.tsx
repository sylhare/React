import { getPosts } from '@/lib/post/getPosts';
import { Post } from '@/ui/post/Post';
import Link from 'next/link';
import React from 'react';

export default async function Page() {
  const posts = await getPosts()

  return (
    <div className="gap-2">
      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
      <Link
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
        href={`/`}>Back</Link>
    </div>
  )
}