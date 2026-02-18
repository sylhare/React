'use client';

import { useLocale } from '@transifex/react';
import Link from 'next/link';
import { BasicTranslation, VariableExample, PluralExample } from './components';
import { LanguageSwitcher } from '../shared/LanguageSwitcher';
import '../styles.css';

export default function TransifexExample() {
  const locale = useLocale();
  const currentLocale = String(locale);

  return (
    <div className="container">
      <div className="header">
        <h1 className="heading-1">Transifex Example</h1>
        <LanguageSwitcher />
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
