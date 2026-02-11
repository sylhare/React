import { getPosts } from '@/lib/post/getPosts';
import { Post } from '@/ui/post/Post';
import Link from 'next/link';
import React from 'react';

export default async function Page() {
  const posts = await getPosts();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          From the Blog
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
          Thoughts, ideas, and tutorials on web development.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Link
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-auto"
          href={`/`}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}