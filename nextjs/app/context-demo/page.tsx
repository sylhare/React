'use client';

import Link from 'next/link';
import ChildComponent from './ChildComponent';
import { ValueProvider, useValue } from './ValueContext';

function ParentContent() {
  const { value, setValue } = useValue();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="mb-4 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          Parent Component
        </h2>
        <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
          Current value from context:
        </p>
        <p
          data-testid="parent-value-display"
          className="mb-4 min-h-6 text-lg font-medium text-zinc-900 dark:text-zinc-50"
        >
          {value || <span className="text-zinc-400 italic">empty</span>}
        </p>
        <input
          data-testid="parent-input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Update shared value from parent..."
          className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50"
        />
      </div>
      <ChildComponent />
      <Link
        href="/"
        data-testid="page-back-link"
        className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default function ContextDemoPage() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-2xl px-8 py-16">
        <h1
          data-testid="page-heading"
          className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-50"
        >
          Context Provider Demo
        </h1>
        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
          A shared value is stored in a React Context. Both the parent and child
          component can read and update it.
        </p>
        <ValueProvider>
          <ParentContent />
        </ValueProvider>
      </main>
    </div>
  );
}
