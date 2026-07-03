import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Button.stories';

// `composeStories` binds each story to the project's preview annotations so the
// exact same story used in the Storybook UI can be rendered inside Vitest.
const { Primary, Danger, Loading, ClicksOnce, DisabledDoesNotClick } =
  composeStories(stories);

describe('Button (portable stories)', () => {
  it('renders the Primary story with its variant class', () => {
    render(<Primary />);
    const button = screen.getByRole('button', { name: /button/i });
    expect(button).toHaveClass('ds-button--primary');
  });

  it('renders the Danger story label', () => {
    render(<Danger />);
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
  });

  it('marks the Loading story as busy and disabled', () => {
    render(<Loading />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');
  });

  it('replays the ClicksOnce interaction test', async () => {
    // Render the story with its own args (incl. the `fn()` spy), then replay the
    // play function. It asserts on `args.onClick` internally; we double-check
    // the same spy here.
    const { container } = render(<ClicksOnce />);
    await ClicksOnce.play!({ canvasElement: container });
    expect(ClicksOnce.args.onClick).toHaveBeenCalledTimes(1);
  });

  it('does not fire onClick when disabled', async () => {
    const { container } = render(<DisabledDoesNotClick />);
    await DisabledDoesNotClick.play!({ canvasElement: container });
    expect(DisabledDoesNotClick.args.onClick).not.toHaveBeenCalled();
  });
});
