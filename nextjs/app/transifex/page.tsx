'use client';

import { T, useLocale } from '@transifex/react';
import { tx } from '@transifex/native';
import Link from 'next/link';
import React, { useState } from 'react';
import { KEYS } from './translationKeys';
import './styles.css';

export default function TransifexExample() {
  const locale = useLocale();
  const [count, setCount] = useState(1);
  const currentLocale = String(locale);

  const handleLanguageChange = (langCode: string) => {
    tx.setCurrentLocale(langCode);
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
  ];

  return (
    <div className="container">
      {/* Language Switcher */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="heading-1">Transifex Example</h1>
        <div className="flex gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
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

      {/* Example Components */}
      <div className="space-y-8">
        {/* Basic Translation */}
        <div className="card">
          <h2 className="heading-2">Basic Translation</h2>
          <div className="space-y-2">
            <p className="text-lg">
              <T _str={KEYS.HELLO_WORLD} />
            </p>
            <p className="text-lg">
              <T _str={KEYS.WELCOME_TRANSIFEX} />
            </p>
            <p>
              <T _str={KEYS.SIMPLE_EXAMPLE} />
            </p>
          </div>
        </div>

        {/* Variables */}
        <div className="card">
          <h2 className="heading-2">Variables</h2>
          <div className="space-y-2">
            <p className="text-lg">
              <T _str={KEYS.HELLO_USERNAME} username="John" />
            </p>
            <p>
              <T _str={KEYS.WELCOME_BACK_USERNAME} username="Sarah" />
            </p>
            <p>
              <T _str={KEYS.ITEM_COST} item="book" price="19.99" />
            </p>
          </div>
        </div>

        {/* Plurals */}
        <div className="card">
          <h2 className="heading-2">Plurals</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCount(Math.max(0, count - 1))}
                className="btn-counter"
              >
                -
              </button>
              <span className="font-semibold">Count: {count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="btn-counter"
              >
                +
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-lg">
                <T _str={KEYS.COUNT_ITEM} count={count} />
              </p>
              <p className="text-lg">
                <T _str={KEYS.COUNT_MESSAGE} count={count} />
              </p>
              <p className="text-lg">
                <T _str={KEYS.COUNT_NOTIFICATION} count={count} />
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Advanced Examples */}
      <div className="mt-12">
        <h2 className="section-title">Advanced Examples</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Reusable Components Card */}
          <Link href="/transifex/components-example" className="card-hover blue">
            <div className="flex items-start justify-between mb-4">
              <div className="icon-container green">
                <svg className="icon green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <svg className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Reusable Components
            </h3>
            <p className="text-muted">
              Learn how to create reusable React components with Transifex translations. Includes greeting cards, notification badges, action buttons, and product cards.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="badge-green">Components</span>
              <span className="badge-blue">Reusable</span>
            </div>
          </Link>

          {/* Context & Comments Card */}
          <Link href="/transifex/context-example" className="card-hover purple">
            <div className="flex items-start justify-between mb-4">
              <div className="icon-container purple">
                <svg className="icon purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <svg className="h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400">
              Context & Comments
            </h3>
            <p className="text-muted">
              Master the use of _context and _comment attributes to disambiguate translations and provide guidance to translators. See how to organize translations in static objects.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="badge-purple">_context</span>
              <span className="badge-pink">_comment</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <Link href="/" className="link">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
