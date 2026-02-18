'use client';

import { useLocale } from '@transifex/react';
import { tx } from '@transifex/native';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const currentLocale = String(locale);

  const handleLanguageChange = (langCode: string) => {
    tx.setCurrentLocale(langCode);
  };

  return (
    <div className="lang-switcher">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`btn-lang ${currentLocale === lang.code ? 'active' : ''}`}
          data-testid={`lang-btn-${lang.code}`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
}
