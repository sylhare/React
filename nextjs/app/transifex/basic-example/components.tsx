import { T } from '@transifex/react';
import { useState } from 'react';
import { KEYS } from '../shared/translationKeys';

/**
 * Displays basic translations without variables or plurals
 * Demonstrates both key-only and key+fallback approaches
 */
export function BasicTranslation() {
  return (
    <div className="card">
      <h2 className="heading-2">Basic Translation</h2>
      <div className="space-y-4">
        <div>
          <p className="text-label">Key-only approach (_str with key)</p>
          <p className="text-lg" data-testid="hello-world">
            <T _str={KEYS.HELLO_WORLD} />
          </p>
          <p className="text-muted">Fallback: Shows key if translation missing</p>
        </div>

        <div>
          <p className="text-label">Key with fallback (_str + _key)</p>
          <p className="text-lg" data-testid="welcome-transifex">
            <T _str="Welcome to Transifex" _key={KEYS.WELCOME_TRANSIFEX} />
          </p>
          <p className="text-muted">Fallback: Shows "Welcome to Transifex" if translation missing</p>
        </div>

        <div>
          <p className="text-label">Standard translation</p>
          <p data-testid="simple-example">
            <T _str={KEYS.SIMPLE_EXAMPLE} />
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Demonstrates variable interpolation in translations
 */
export function VariableExample() {
  return (
    <div className="card">
      <h2 className="heading-2">Variables</h2>
      <div className="space-y-2">
        <p className="text-lg">
          <T _str={KEYS.HELLO_USERNAME} username="John" />
        </p>
        <p>
          <T _str={KEYS.WELCOME_BACK_USERNAME} username="Sarah" />
        </p>
        <p>
          <T _str={KEYS.ITEM_COST} item="book" price="19.99" />
        </p>
      </div>
    </div>
  );
}

/**
 * Demonstrates plural forms with ICU MessageFormat
 */
export function PluralExample() {
  const [count, setCount] = useState(1);

  return (
    <div className="card">
      <h2 className="heading-2">Plurals</h2>
      <div className="space-y-4">
        <div className="counter-controls">
          <button
            onClick={() => setCount(Math.max(0, count - 1))}
            className="btn-counter"
          >
            -
          </button>
          <span className="debug-info">Count: {count}</span>
          <button
            onClick={() => setCount(count + 1)}
            className="btn-counter"
          >
            +
          </button>
        </div>
        <div className="space-y-2">
          <p className="text-lg">
            <T _str={KEYS.COUNT_ITEM} count={count} />
          </p>
          <p className="text-lg">
            <T _str={KEYS.COUNT_MESSAGE} count={count} />
          </p>
          <p className="text-lg">
            <T _str={KEYS.COUNT_NOTIFICATION} count={count} />
          </p>
        </div>
      </div>
    </div>
  );
}
