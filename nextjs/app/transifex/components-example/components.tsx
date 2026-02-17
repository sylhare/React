import { T } from '@transifex/react';
import { KEYS } from '../shared/translationKeys';
import '../styles.css';

/**
 * Simple greeting card component with user name
 */
export function GreetingCard({ name }: { name: string }) {
  return (
    <div className="greeting-card">
      <h3 className="greeting-card-title">
        <T _str={KEYS.HELLO_USERNAME} username={name} />
      </h3>
      <p className="greeting-card-text">
        <T _str={KEYS.WELCOME_BACK_USERNAME} username={name} />
      </p>
    </div>
  );
}

/**
 * Notification badge with animated indicator
 */
export function NotificationBadge({ count }: { count: number }) {
  return (
    <div className="notification-badge">
      <span className="notification-indicator">
        <span className="notification-ping"></span>
        <span className="notification-dot"></span>
      </span>
      <span className="notification-badge-text">
        <T _str={KEYS.COUNT_NOTIFICATION} count={count} />
      </span>
    </div>
  );
}

/**
 * Action button with translated label
 */
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

/**
 * Product card with price and stock status
 */
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
