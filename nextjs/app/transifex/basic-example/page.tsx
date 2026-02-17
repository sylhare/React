'use client';

import { useLocale } from '@transifex/react';
import { tx } from '@transifex/native';
import Link from 'next/link';
import { BasicTranslation, VariableExample, PluralExample } from './components';
import '../styles.css';

export default function TransifexExample() {
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
        <h1 className="heading-1">Transifex Example</h1>
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

      <div className="examples">
        <BasicTranslation />
        <VariableExample />
        <PluralExample />
      </div>

      <Link href="/transifex" className="link">
        ← Back to Examples
      </Link>
    </div>
  );
}
