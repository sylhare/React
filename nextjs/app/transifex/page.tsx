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
