'use client';

import Link from 'next/link';
import './styles.css';

export default function TransifexExamplesPage() {
  return (
    <div className="container">
      <h1 className="heading-1">Transifex Native Examples</h1>
      <p className="text-muted">
        Learn how to implement internationalization in Next.js using Transifex Native.
      </p>

      <div className="button-list">
        <Link href="/transifex/basic-example" className="btn-primary">
          Basic Example
        </Link>
        <Link href="/transifex/components-example" className="btn-primary">
          Reusable Components
        </Link>
        <Link href="/transifex/context-example" className="btn-primary">
          Context & Comments
        </Link>
        <Link href="/transifex/string-props-example" className="btn-primary">
          String Props
        </Link>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '0.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Testing & Advanced</h3>
        <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem' }}>
          Test the _key attribute behavior and fallback patterns
        </p>
        <Link href="/transifex/test-key-attribute" className="link">
          → Test _key Attribute Functionality
        </Link>
      </div>

      <Link href="/" className="link" style={{ marginTop: '2rem', display: 'inline-block' }}>
        ← Back to Home
      </Link>
    </div>
  );
}
