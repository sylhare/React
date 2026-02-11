import React from 'react';
import { PostData } from '@/lib/post/getPosts';
import Link from 'next/link';

export const Post: React.FC<{ post: PostData }> = ({ post }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg dark:shadow-gray-700 hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
            Article
          </p>
          <div className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {post.title}
            </p>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
              {post.excerpt}
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <span className="sr-only">{post.title}</span>
          </div>
          <div className="">
            <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
              <time dateTime={post.date}>{post.date}</time>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};