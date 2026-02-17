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

      <Link href="/" className="link">
        ← Back to Home
      </Link>
    </div>
  );
}
