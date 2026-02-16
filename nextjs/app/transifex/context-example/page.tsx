'use client';

import Link from 'next/link';
import React from 'react';
import { useLocale } from '@transifex/react';
import { SocialMediaCard } from '../SocialMediaCard';

export default function ContextExamplePage() {
  const locale = useLocale();
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
        <h1 className="text-3xl font-bold">Context & Comments</h1>
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

      <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
        <h2 className="text-xl font-semibold mb-4">
          Using _context and _comment Attributes
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          This example shows how to use{' '}
          <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">
            _context
          </code>{' '}
          and{' '}
          <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">
            _comment
          </code>{' '}
          attributes to provide disambiguation and translator guidance. The{' '}
          <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">
            TranslatedText.tsx
          </code>{' '}
          file organizes translations in static objects like{' '}
          <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">
            COMMON
          </code>
          ,{' '}
          <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">
            MESSAGES
          </code>
          , and{' '}
          <code className="bg-gray-100 dark:bg-gray-900 px-1 rounded">
            CTA
          </code>
          , used throughout the app.
        </p>

        <div className="mb-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4">
          <h3 className="text-sm font-semibold text-green-900 dark:text-green-100 mb-2">
            Organized Translation Structure
          </h3>
          <div className="text-sm text-green-800 dark:text-green-200 space-y-2">
            <div>
              <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                COMMON.post.asVerb
              </code>{' '}
              - Post as an action
            </div>
            <div>
              <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                COMMON.post.asNoun
              </code>{' '}
              - Post as a social media item
            </div>
            <div>
              <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                COMMON.like.asVerb
              </code>{' '}
              - Like button action
            </div>
            <div>
              <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                MESSAGES.welcome(name)
              </code>{' '}
              - Welcome greeting with parameter
            </div>
          </div>
        </div>

        <div className="mb-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4">
          <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Why use _context and _comment?
          </h3>
          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1 list-disc list-inside">
            <li>
              <strong>_context:</strong> Disambiguates words with multiple
              meanings (e.g., "Post" as noun vs verb)
            </li>
            <li>
              <strong>_comment:</strong> Provides guidance on tone, length
              constraints, or special requirements
            </li>
            <li>
              Helps translators produce accurate, context-appropriate
              translations
            </li>
            <li>
              Same string with different contexts = different translation keys
            </li>
          </ul>
        </div>

        <SocialMediaCard
          username="Alex"
          content="Just launched my new project! Really excited to share this with everyone. Check it out and let me know what you think! 🚀"
          likes={42}
        />

        <div className="mt-4 rounded-lg bg-gray-50 dark:bg-gray-900/50 p-4">
          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Translation Keys (String:Context):
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
            <div className="bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
              Post:social-media-noun
            </div>
            <div className="bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
              Post:action-verb
            </div>
            <div className="bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
              Like:social-action
            </div>
            <div className="bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700">
              Save:bookmark-action
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <Link
          href="/transifex"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          &larr; Back to Examples
        </Link>
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
