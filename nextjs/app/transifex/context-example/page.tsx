'use client';

import Link from 'next/link';
import React from 'react';
import { useLocale } from '@transifex/react';
import { tx } from '@transifex/native';
import { SocialMediaCard } from './SocialMediaCard';
import '../styles.css';

export default function ContextExamplePage() {
  const locale = useLocale();
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
      <div className="header">
        <h1 className="heading-1">Context & Comments</h1>
        <div className="lang-switcher">
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
