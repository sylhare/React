import React from 'react';
import { PostData } from '@/lib/post/getPosts';
import Link from 'next/link';

export const Post: React.FC<{ post: PostData }> =
  ({ post }) => {
  return (<div>
    <p>{post.id}</p>
    <p>{post.title}</p>
    <p>{post.content}</p>
    <Link className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]" href={`/blog/${post.title}`}>{post.title}</Link>
  </div>)
}