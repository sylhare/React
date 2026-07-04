import './Badge.css';

export type BadgeTone = 'neutral' | 'success' | 'warning' | 'info';

export interface BadgeProps {
  /** Semantic colour of the badge. */
  tone?: BadgeTone;
  children: string;
}

/** A small status label atom. */
export const Badge = ({ tone = 'neutral', children }: BadgeProps) => (
  <span className={`ds-badge ds-badge--${tone}`}>{children}</span>
);
