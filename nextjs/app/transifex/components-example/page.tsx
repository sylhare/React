'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useLocale } from '@transifex/react';
import { tx } from '@transifex/native';
import {
  ActionButton,
  GreetingCard,
  NotificationBadge,
  ProductCard,
} from '../components';
import '../styles.css';

export default function ComponentsExamplePage() {
  const locale = useLocale();
  const [count, setCount] = useState(3);
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
        <h1 className="heading-1">Reusable Components</h1>
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

      <div className="card">
        <h2 className="heading-2">Reusable Components with Transifex</h2>
        <p className="text-muted mb-6">
          These are reusable components that use Transifex internally. See{' '}
          <code className="code-inline">app/transifex/components.tsx</code>
        </p>

        <div className="space-y-6">
          {/* Greeting Card Example */}
          <div>
            <p className="text-label mb-2">Greeting Card Component</p>
            <GreetingCard name="Maria" />
          </div>

          {/* Notification Badge Example */}
          <div>
            <p className="text-label mb-2">Notification Badge Component</p>
            <div className="flex flex-wrap gap-3">
              <NotificationBadge count={1} />
              <NotificationBadge count={5} />
              <NotificationBadge count={count} />
            </div>
            <div className="mt-3 flex items-center gap-4">
              <button
                onClick={() => setCount(Math.max(0, count - 1))}
                className="btn-counter"
                data-testid="notification-decrement"
              >
                -
              </button>
              <span className="font-semibold" data-testid="notification-count">
                Count: {count}
              </span>
              <button
                onClick={() => setCount(count + 1)}
                className="btn-counter"
                data-testid="notification-increment"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons Example */}
          <div>
            <p className="text-label mb-2">Action Button Component</p>
            <div className="flex flex-wrap gap-2">
              <ActionButton action="Read" />
              <ActionButton action="Close" />
              <ActionButton action="Present" />
            </div>
          </div>

          {/* Product Card Example */}
          <div>
            <p className="text-label mb-2">Product Card Component</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <ProductCard item="laptop" price="999.99" inStock={true} />
              <ProductCard item="phone" price="599.99" inStock={false} />
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
