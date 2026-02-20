'use client';

import Link from 'next/link';
import React from 'react';
import { useLocale } from '@transifex/react';
import {
  ActionButton,
  GreetingCard,
  NotificationBadge,
  ProductCard,
} from './components';
import { LanguageSwitcher } from '../shared/LanguageSwitcher';
import '../styles.css';

export default function ComponentsExamplePage() {
  const locale = useLocale();
  const currentLocale = String(locale);

  return (
    <div className="container">
      <div className="header">
        <h1 className="heading-1" data-testid="page-heading">Reusable Components</h1>
        <LanguageSwitcher />
      </div>

      <p className="debug-info">
        Current Language: <span className="font-semibold">{currentLocale}</span>
      </p>

      <div className="examples">
        <GreetingCard name="Maria" />

        <div className="notification-badges">
          <NotificationBadge count={1} />
          <NotificationBadge count={5} />
          <NotificationBadge count={10} />
        </div>

        <div className="action-buttons">
          <ActionButton action="Read" />
          <ActionButton action="Close" />
          <ActionButton action="Present" />
        </div>

        <div className="product-cards">
          <ProductCard item="laptop" price="999.99" inStock={true} />
          <ProductCard item="phone" price="599.99" inStock={false} />
        </div>
      </div>

      <Link href="/transifex" className="link">
        ← Back to Examples
      </Link>
    </div>
  );
}
