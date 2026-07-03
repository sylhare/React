import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  /** Visual style of the button. */
  variant?: ButtonVariant;
  /** Size of the button. */
  size?: ButtonSize;
  /** Shows a spinner and disables interaction. */
  isLoading?: boolean;
  /** Stretches the button to the full width of its container. */
  isFullWidth?: boolean;
  children: ReactNode;
}

/**
 * The primary call-to-action element of the design system. A single component
 * renders many "versions" of the same UI through its `variant`/`size` props.
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  isFullWidth = false,
  disabled,
  children,
  ...rest
}: ButtonProps) => {
  const classes = [
    'ds-button',
    `ds-button--${variant}`,
    `ds-button--${size}`,
    isFullWidth ? 'ds-button--full' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...rest}
    >
      {isLoading && <span className="ds-button__spinner" aria-hidden="true" />}
      <span>{children}</span>
    </button>
  );
};
