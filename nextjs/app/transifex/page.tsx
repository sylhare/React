'use client';

import { T, useLocale } from '@transifex/react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function TransifexExample() {
  const locale = useLocale();
  const [count, setCount] = useState(1);
  const currentLocale = String(locale);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      {/* Language Switcher */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Transifex Example</h1>
        <div className="flex gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => locale.setCurrentLocale(lang.code)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                currentLocale === lang.code
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-8 text-sm text-gray-600 dark:text-gray-400">
        Current Language: <span className="font-semibold">{currentLocale}</span>
      </p>

      {/* Example Components */}
      <div className="space-y-8">
        {/* Basic Translation */}
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
          <h2 className="text-xl font-semibold mb-4">Basic Translation</h2>
          <div className="space-y-2">
            <p className="text-lg">
              <T _str="Hello, World!" />
            </p>
            <p className="text-lg">
              <T _str="Welcome to Transifex" />
            </p>
            <p>
              <T _str="This is a simple translation example." />
            </p>
          </div>
        </div>

        {/* Variables */}
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
          <h2 className="text-xl font-semibold mb-4">Variables</h2>
          <div className="space-y-2">
            <p className="text-lg">
              <T _str="Hello, {username}!" username="John" />
            </p>
            <p>
              <T
                _str="Welcome back, {username}! How are you today?"
                username="Sarah"
              />
            </p>
            <p>
              <T _str="The {item} costs ${price}" item="book" price="19.99" />
            </p>
          </div>
        </div>

        {/* Plurals */}
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
          <h2 className="text-xl font-semibold mb-4">Plurals</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCount(Math.max(0, count - 1))}
                className="rounded bg-gray-200 dark:bg-gray-700 px-3 py-1 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                -
              </button>
              <span className="font-semibold">Count: {count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="rounded bg-gray-200 dark:bg-gray-700 px-3 py-1 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                +
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-lg">
                <T _str="{count} item" count={count} />
              </p>
              <p className="text-lg">
                <T _str="{count} message" count={count} />
              </p>
              <p className="text-lg">
                <T _str="You have {count} notification" count={count} />
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Advanced Examples */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Advanced Examples</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Reusable Components Card */}
          <Link
            href="/transifex/components-example"
            className="group rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="rounded-lg bg-green-100 dark:bg-green-900/30 p-3">
                <svg
                  className="h-6 w-6 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <svg
                className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Reusable Components
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Learn how to create reusable React components with Transifex
              translations. Includes greeting cards, notification badges, action
              buttons, and product cards.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-xs font-medium text-green-700 dark:text-green-300">
                Components
              </span>
              <span className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                Reusable
              </span>
            </div>
          </Link>

          {/* Context & Comments Card */}
          <Link
            href="/transifex/context-example"
            className="group rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-lg hover:border-purple-500 dark:hover:border-purple-500 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="rounded-lg bg-purple-100 dark:bg-purple-900/30 p-3">
                <svg
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <svg
                className="h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400">
              Context & Comments
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Master the use of _context and _comment attributes to disambiguate
              translations and provide guidance to translators. See how to organize
              translations in static objects.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">
                _context
              </span>
              <span className="rounded-full bg-pink-100 dark:bg-pink-900/30 px-3 py-1 text-xs font-medium text-pink-700 dark:text-pink-300">
                _comment
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
