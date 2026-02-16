import { T } from '@transifex/react';

// Example 1: Simple Greeting Card Component
export function GreetingCard({ name }: { name: string }) {
  return (
    <div className="rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-4">
      <h3 className="text-lg font-semibold mb-2">
        <T _str="Hello, {username}!" username={name} />
      </h3>
      <p className="text-sm">
        <T _str="Welcome back, {username}! How are you today?" username={name} />
      </p>
    </div>
  );
}

// Example 2: Notification Badge Component
export function NotificationBadge({ count }: { count: number }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-red-100 dark:bg-red-900/30 px-4 py-2">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
      <span className="text-sm font-medium text-red-900 dark:text-red-100">
        <T _str="You have {count} notification" count={count} />
      </span>
    </div>
  );
}

// Example 3: Action Button Component
export function ActionButton({
  action,
  onClick,
}: {
  action: 'Read' | 'Close' | 'Present';
  onClick?: () => void;
}) {
  const buttonStyles: Record<typeof action, string> = {
    Read: 'bg-green-600 hover:bg-green-700 text-white',
    Close: 'bg-gray-600 hover:bg-gray-700 text-white',
    Present: 'bg-purple-600 hover:bg-purple-700 text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${buttonStyles[action]}`}
    >
      <T _str={action} />
    </button>
  );
}

// Example 4: Product Card Component
export function ProductCard({
  item,
  price,
  inStock,
}: {
  item: string;
  price: string;
  inStock: boolean;
}) {
  return (
    <div className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-4 shadow-sm">
      <div className="mb-3">
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          <T _str="The {item} costs ${price}" item={item} price={price} />
        </p>
      </div>
      <div className="flex items-center justify-between">
        {inStock ? (
          <span className="text-xs font-medium text-green-600 dark:text-green-400">
            <T _str="In Stock" />
          </span>
        ) : (
          <span className="text-xs font-medium text-red-600 dark:text-red-400">
            <T _str="Out of Stock" />
          </span>
        )}
        <ActionButton action="Present" />
      </div>
    </div>
  );
}
