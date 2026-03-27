'use client';

import Link from 'next/link';
import { useValue } from './ValueContext';

export default function ChildComponent() {
  const { value, setValue } = useValue();

  return (
    <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-700">
      <h2 className="mb-4 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
        Child Component
      </h2>
      <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
        Current value from context:
      </p>
      <p
        data-testid="child-value-display"
        className="mb-4 min-h-6 text-lg font-medium text-zinc-900 dark:text-zinc-50"
      >
        {value || <span className="text-zinc-400 italic">empty</span>}
      </p>
      <input
        data-testid="child-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Update shared value from child..."
        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50"
      />
      <Link
        href="/"
        data-testid="child-back-link"
        className="mt-4 inline-block text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
