import { useT } from '@transifex/react';
import { KEYS } from '../shared/translationKeys';

/**
 * Search input component requiring string placeholder
 */
export function SearchInput() {
  const t = useT();

  return (
    <input
      type="text"
      placeholder={t('Search...', { _key: 'search.placeholder' })}
      aria-label={t('Search', { _key: 'search.label' })}
      className="input-field"
    />
  );
}

/**
 * Button with string title attribute for tooltips
 */
export function TooltipButton() {
  const t = useT();

  return (
    <button
      title={t('Click to save', { _key: 'button.save_tooltip' })}
      className="btn-action-read"
    >
      {t('Save', { _key: 'button.save' })}
    </button>
  );
}

/**
 * Form with multiple string props (placeholder, labels)
 */
export function ContactForm() {
  const t = useT();

  return (
    <div className="form-container">
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          {t('Name', { _key: 'form.name_label' })}
        </label>
        <input
          id="name"
          type="text"
          placeholder={t('Enter your name', { _key: 'form.name_placeholder' })}
          className="input-field"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          {t('Email', { _key: 'form.email_label' })}
        </label>
        <input
          id="email"
          type="email"
          placeholder={t('your@email.com', { _key: 'form.email_placeholder' })}
          className="input-field"
        />
      </div>

      <button type="submit" className="btn-primary">
        {t('Submit', { _key: 'form.submit' })}
      </button>
    </div>
  );
}

/**
 * Select dropdown requiring string options
 */
export function LanguageSelect() {
  const t = useT();

  const options = [
    { value: 'en', label: t('English', { _key: 'languages.english' }) },
    { value: 'es', label: t('Spanish', { _key: 'languages.spanish' }) },
    { value: 'fr', label: t('French', { _key: 'languages.french' }) },
  ];

  return (
    <div className="form-group">
      <label htmlFor="lang" className="form-label">
        {t('Select Language', { _key: 'form.language_label' })}
      </label>
      <select id="lang" className="select-field">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

/**
 * Alert component that takes a string message prop
 */
interface AlertProps {
  message: string;
  type: 'success' | 'error' | 'warning';
}

function Alert({ message, type }: AlertProps) {
  return (
    <div className={`alert alert-${type}`}>
      {message}
    </div>
  );
}

export function AlertExample() {
  const t = useT();

  return (
    <div className="alert-container">
      <Alert
        type="success"
        message={t('Operation completed successfully!', { _key: 'alerts.success' })}
      />
      <Alert
        type="error"
        message={t('An error occurred. Please try again.', { _key: 'alerts.error' })}
      />
      <Alert
        type="warning"
        message={t('Please review your information before proceeding.', { _key: 'alerts.warning' })}
      />
    </div>
  );
}
