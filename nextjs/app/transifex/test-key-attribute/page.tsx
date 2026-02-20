'use client';

import { useLocale, T, useT } from '@transifex/react';
import Link from 'next/link';
import { LanguageSwitcher } from '../shared/LanguageSwitcher';
import { KEYS } from '../shared/translationKeys';
import '../styles.css';

export default function TestKeyAttributePage() {
  const locale = useLocale();
  const currentLocale = String(locale);
  const t = useT();

  return (
    <div className="container">
      <div className="header">
        <h1 className="heading-1" data-testid="page-heading">Translation Key Attribute Behavior</h1>
        <LanguageSwitcher />
      </div>

      <p className="debug-info">
        Current Language: <span className="font-semibold">{currentLocale}</span>
      </p>

      <div className="examples">
        <div className="card" data-testid="test-1">
          <h2 className="heading-2">Test 1: Key-only approach (_str with key)</h2>
          <p data-testid="test-1-output" className="text-lg"><T _str="test.key" /></p>
          <p className="test-description">
            _key: (none) | _str: "test.key"
          </p>
        </div>

        <div className="card" data-testid="test-2">
          <h2 className="heading-2">Test 2: Using _key with _str fallback (RECOMMENDED)</h2>
          <p data-testid="test-2-output" className="text-lg"><T _str="Fallback text" _key="test.key" /></p>
          <p className="test-description">
            _key: "test.key" | _str: "Fallback text"
          </p>
        </div>

        <div className="card" data-testid="test-3">
          <h2 className="heading-2">Test 3: useT() hook with _key</h2>
          <p data-testid="test-3-output" className="text-lg">{t('Fallback text', { _key: 'test.key' })}</p>
          <p className="test-description">
            _key: "test.key" | _str: "Fallback text"
          </p>
        </div>

        <div className="card" data-testid="test-4">
          <h2 className="heading-2">Test 4: Missing translation with fallback</h2>
          <p data-testid="test-4-output" className="text-lg"><T _str="This is the fallback text" _key="test.missing" /></p>
          <p className="test-description">
            _key: "test.missing" | _str: "This is the fallback text"
          </p>
        </div>

        <div className="card" data-testid="test-5">
          <h2 className="heading-2">Test 5: Using _context (metadata for translators)</h2>
          <p data-testid="test-5-output" className="text-lg"><T _str="Post" _key="test.post" _context="verb" /></p>
          <p className="test-description">
            _key: "test.post" | _str: "Post" | _context: "verb"
          </p>
          <p className="test-note" style={{ fontSize: '0.875rem', marginTop: '0.5rem', color: 'rgb(107 114 128)' }}>
            Note: _context provides information to translators but does not create different translations in offline cache mode
          </p>
        </div>

        <div className="card" data-testid="test-6">
          <h2 className="heading-2">Test 6: Same key without _context</h2>
          <p data-testid="test-6-output" className="text-lg"><T _str="Post" _key="test.post" /></p>
          <p className="test-description">
            _key: "test.post" | _str: "Post"
          </p>
          <p className="test-note" style={{ fontSize: '0.875rem', marginTop: '0.5rem', color: 'rgb(107 114 128)' }}>
            Note: Same result as Test 5, showing _context is informational only
          </p>
        </div>
      </div>

      <Link href="/transifex" className="link" style={{ marginTop: '2rem', display: 'inline-block' }}>
        ← Back to Examples
      </Link>
    </div>
  );
}
