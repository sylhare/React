import { useState } from 'react';
import { Badge } from './components/Badge/Badge';
import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';
import { Rating } from './components/Rating/Rating';

/**
 * A small demo page that assembles the design-system components into a real
 * frontend. Running `yarn dev` / `yarn build` renders this; Storybook documents
 * each piece in isolation.
 */
export const App = () => {
  const [rating, setRating] = useState(0);

  return (
    <main className="app">
      <header className="app__header">
        <h1 className="app__title">
          Storybook Demo <Badge tone="info">Beta</Badge>
        </h1>
        <p className="app__subtitle">
          A tiny design system documented with Storybook and tested with Vitest.
        </p>
      </header>

      <section>
        <h2>Actions</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Delete</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>

      <section>
        <h2>Rate this demo</h2>
        <Rating defaultValue={rating} onChange={setRating} />
        <p className="app__subtitle">You rated it {rating} / 5.</p>
      </section>

      <section>
        <h2>Cards</h2>
        <div className="app__grid">
          <Card
            title="Design tokens"
            description="Reusable variables for colour, spacing and typography."
            status={{ label: 'Active', tone: 'success' }}
          />
          <Card
            title="Migration pending"
            description="This component still uses the legacy theme."
            status={{ label: 'Pending', tone: 'warning' }}
            actionLabel="Review"
          />
          <Card
            title="Accessibility"
            description="Checked automatically by the a11y addon in Storybook."
            status={{ label: 'Beta', tone: 'info' }}
          />
        </div>
      </section>
    </main>
  );
};
