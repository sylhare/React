import { Badge, type BadgeTone } from '../Badge/Badge';
import { Button } from '../Button/Button';
import './Card.css';

export interface CardProps {
  title: string;
  description: string;
  /** Optional status badge shown next to the title. */
  status?: { label: string; tone: BadgeTone };
  actionLabel?: string;
  onAction?: () => void;
}

/**
 * A molecule composed of the `Badge` and `Button` atoms — demonstrates the
 * atomic-design hierarchy inside the Storybook sidebar.
 */
export const Card = ({
  title,
  description,
  status,
  actionLabel = 'Learn more',
  onAction,
}: CardProps) => (
  <article className="ds-card">
    <header className="ds-card__header">
      <h3 className="ds-card__title">{title}</h3>
      {status && <Badge tone={status.tone}>{status.label}</Badge>}
    </header>
    <p className="ds-card__body">{description}</p>
    <footer className="ds-card__footer">
      <Button variant="primary" size="sm" onClick={onAction}>
        {actionLabel}
      </Button>
    </footer>
  </article>
);
