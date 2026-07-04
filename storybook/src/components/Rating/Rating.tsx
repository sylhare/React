import { useState } from 'react';
import './Rating.css';

export interface RatingProps {
  /** Number of stars. */
  max?: number;
  /** Initial selected value (uncontrolled). */
  defaultValue?: number;
  /** Called whenever the rating changes. */
  onChange?: (value: number) => void;
}

/** An interactive star-rating molecule — great for interaction testing. */
export const Rating = ({ max = 5, defaultValue = 0, onChange }: RatingProps) => {
  const [value, setValue] = useState(defaultValue);

  const select = (next: number) => {
    setValue(next);
    onChange?.(next);
  };

  return (
    <div className="ds-rating" role="radiogroup" aria-label="Rating">
      {Array.from({ length: max }, (_, i) => i + 1).map((star) => (
        <button
          key={star}
          type="button"
          role="radio"
          aria-checked={value === star}
          aria-label={`${star} star${star > 1 ? 's' : ''}`}
          className={`ds-rating__star ${star <= value ? 'is-active' : ''}`}
          onClick={() => select(star)}
        >
          ★
        </button>
      ))}
    </div>
  );
};
