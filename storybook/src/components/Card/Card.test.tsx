import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Card.stories';

const { Basic, WithSuccessStatus, ActionIsClickable } = composeStories(stories);

describe('Card (portable stories)', () => {
  it('renders title and description from the Basic story', () => {
    render(<Basic />);
    expect(
      screen.getByRole('heading', { name: /design tokens/i }),
    ).toBeInTheDocument();
  });

  it('shows the composed Badge atom when a status is provided', () => {
    render(<WithSuccessStatus />);
    expect(screen.getByText('Active')).toHaveClass('ds-badge--success');
  });

  it('replays the ActionIsClickable interaction test', async () => {
    const { container } = render(<ActionIsClickable />);
    await ActionIsClickable.play!({ canvasElement: container });
    expect(ActionIsClickable.args.onAction).toHaveBeenCalledTimes(1);
  });
});
