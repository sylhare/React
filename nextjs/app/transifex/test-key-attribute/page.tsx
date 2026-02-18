'use client';

import { tx } from '@transifex/native';
import { T, TXProvider, useT } from '@transifex/react';
import { useEffect, useState } from 'react';
import '../styles.css';

// Test translations
const translations = {
  en: {
    'test.key': 'Translation from cache using key',
  },
  es: {
    'test.key': 'Traducción desde caché usando clave',
  },
};

function TestContent() {
  const t = useT();

  return (
    <div className="test-container">
      <h1 className="heading-1">Translation Key Attribute Behavior</h1>

      <div className="test-section">
        <h2 className="heading-2">Test 1: Translation key in _str</h2>
        <p><T _str="test.key" /></p>
        <p className="test-description">
          Lookup: "test.key" | Fallback: "test.key"
        </p>
      </div>

      <div className="test-section">
        <h2 className="heading-2">Test 2: Using _key with _str fallback</h2>
        <p><T _str="This is fallback text" _key="test.key" /></p>
        <p className="test-description">
          Lookup: "test.key" | Fallback: "This is fallback text"
        </p>
        <p className="test-note success">
          Result: Translation found, displays cached value
        </p>
      </div>

      <div className="test-section">
        <h2 className="heading-2">Test 3: useT() hook with _key</h2>
        <p>{t('This is the proper fallback', { _key: 'test.key' })}</p>
        <p className="test-description">
          Lookup: "test.key" | Fallback: "This is the proper fallback"
        </p>
        <p className="test-note success">
          Result: Translation found, displays cached value
        </p>
      </div>

      <div className="test-buttons">
        <button onClick={() => tx.setCurrentLocale('es')} className="btn-test">
          Switch to Spanish
        </button>
        <button onClick={() => tx.setCurrentLocale('en')} className="btn-test">
          Switch to English
        </button>
      </div>
    </div>
  );
}

export default function TestKeyPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    tx.init({
      token: '',
      currentLocale: 'en',
    });

    Object.entries(translations).forEach(([locale, strings]) => {
      Object.entries(strings).forEach(([key, value]) => {
        tx.cache.update(locale, { [key]: value });
      });
    });

    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <TXProvider tx={tx}>
      <TestContent />
    </TXProvider>
  );
}
