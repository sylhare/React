'use client';

import Link from 'next/link';
import React from 'react';
import { useLocale } from '@transifex/react';
import { SocialMediaCard } from './SocialMediaCard';
import { LanguageSwitcher } from '../shared/LanguageSwitcher';
import '../styles.css';

export default function ContextExamplePage() {
  const locale = useLocale();
  const currentLocale = String(locale);

  return (
    <div className="container">
      <div className="header">
        <h1 className="heading-1" data-testid="page-heading">Context & Comments</h1>
        <LanguageSwitcher />
      </div>

      <p className="debug-info">
        Current Language: <span className="font-semibold">{currentLocale}</span>
      </p>

      <SocialMediaCard
        username="Alex"
        content="Just launched my new project! Really excited to share this with everyone. Check it out and let me know what you think! 🚀"
        likes={42}
      />

      <Link href="/transifex" className="link">
        ← Back to Examples
      </Link>
    </div>
  );
}
