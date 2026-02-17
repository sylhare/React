import { T } from '@transifex/react';
import { KEYS } from './translationKeys';
import './styles.css';

// Example 1: Simple Greeting Card Component
export function GreetingCard({ name }: { name: string }) {
  return (
    <div className="greeting-card">
      <h3 className="text-lg font-semibold mb-2">
        <T _str={KEYS.HELLO_USERNAME} username={name} />
      </h3>
      <p className="text-sm">
        <T _str={KEYS.WELCOME_BACK_USERNAME} username={name} />
      </p>
    </div>
  );
}

// Example 2: Notification Badge Component
export function NotificationBadge({ count }: { count: number }) {
  return (
    <div className="notification-badge">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
      <span className="notification-badge-text">
        <T _str={KEYS.COUNT_NOTIFICATION} count={count} />
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
  const buttonClass = {
    Read: 'btn-action-read',
    Close: 'btn-action-close',
    Present: 'btn-action-present',
  }[action];

  const actionKey = action === 'Read' ? KEYS.READ : action === 'Close' ? KEYS.CLOSE : KEYS.PRESENT;

  return (
    <button onClick={onClick} className={buttonClass}>
      <T _str={actionKey} />
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
    <div className="product-card">
      <div className="product-card-header">
        <T _str={KEYS.ITEM_COST} item={item} price={price} />
      </div>
      <div className="product-card-footer">
        {inStock ? (
          <span className="stock-badge in-stock">
            <T _str={KEYS.IN_STOCK} />
          </span>
        ) : (
          <span className="stock-badge out-of-stock">
            <T _str={KEYS.OUT_OF_STOCK} />
          </span>
        )}
        <ActionButton action="Present" />
      </div>
    </div>
  );
}
