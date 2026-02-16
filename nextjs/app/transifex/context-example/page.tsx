'use client';

import Link from 'next/link';
import React from 'react';
import { useLocale } from '@transifex/react';
import { SocialMediaCard } from '../SocialMediaCard';
import '../styles.css';

export default function ContextExamplePage() {
  const locale = useLocale();
  const currentLocale = String(locale);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
  ];

  return (
    <div className="container">
      {/* Language Switcher */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="heading-1">Context & Comments</h1>
        <div className="flex gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => locale.setCurrentLocale(lang.code)}
              className={`btn-lang ${currentLocale === lang.code ? 'active' : ''}`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>

      <p className="text-muted mb-8">
        Current Language: <span className="font-semibold">{currentLocale}</span>
      </p>

      <div className="card">
        <h2 className="heading-2">Using _context and _comment Attributes</h2>
        <p className="text-muted mb-4">
          This example shows how to use{' '}
          <code className="code-inline">_context</code> and{' '}
          <code className="code-inline">_comment</code> attributes
          to provide disambiguation and translator guidance. The{' '}
          <code className="code-inline">TranslatedText.tsx</code> file
          organizes translations in static objects like{' '}
          <code className="code-inline">COMMON</code>,{' '}
          <code className="code-inline">MESSAGES</code>, and{' '}
          <code className="code-inline">CTA</code>, used throughout the app.
        </p>

        <div className="info-box green">
          <h3 className="info-box-title">Organized Translation Structure</h3>
          <div className="info-box-content">
            <div>
              <code className="code-block">COMMON.post.asVerb</code> - Post as an action
            </div>
            <div>
              <code className="code-block">COMMON.post.asNoun</code> - Post as a social media item
            </div>
            <div>
              <code className="code-block">COMMON.like.asVerb</code> - Like button action
            </div>
            <div>
              <code className="code-block">MESSAGES.welcome(name)</code> - Welcome greeting with parameter
            </div>
          </div>
        </div>

        <div className="info-box blue">
          <h3 className="info-box-title">Why use _context and _comment?</h3>
          <ul className="info-box-content list-disc list-inside space-y-1">
            <li>
              <strong>_context:</strong> Disambiguates words with multiple meanings (e.g., "Post" as noun vs verb)
            </li>
            <li>
              <strong>_comment:</strong> Provides guidance on tone, length constraints, or special requirements
            </li>
            <li>Helps translators produce accurate, context-appropriate translations</li>
            <li>Same string with different contexts = different translation keys</li>
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
        <Link href="/transifex" className="link">
          &larr; Back to Examples
        </Link>
        <Link href="/" className="link">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
