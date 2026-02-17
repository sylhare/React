'use client';

import Link from 'next/link';
import { useLocale } from '@transifex/react';
import { tx } from '@transifex/native';
import {
  SearchInput,
  TooltipButton,
  ContactForm,
  LanguageSelect,
  AlertExample,
} from './components';
import '../styles.css';

export default function StringPropsExamplePage() {
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
        <h1 className="heading-1">String Props Example</h1>
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
        <div className="card">
          <h2 className="heading-2">Search Input</h2>
          <SearchInput />
        </div>

        <div className="card">
          <h2 className="heading-2">Button with Tooltip</h2>
          <TooltipButton />
        </div>

        <div className="card">
          <h2 className="heading-2">Contact Form</h2>
          <ContactForm />
        </div>

        <div className="card">
          <h2 className="heading-2">Language Select</h2>
          <LanguageSelect />
        </div>

        <div className="card">
          <h2 className="heading-2">Alert Messages</h2>
          <AlertExample />
        </div>
      </div>

      <Link href="/transifex" className="link">
        ← Back to Examples
      </Link>
    </div>
  );
}
