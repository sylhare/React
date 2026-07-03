import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Rating.stories';

const { Prefilled, TenStars, SelectsAStar } = composeStories(stories);

describe('Rating (portable stories)', () => {
  it('reflects the defaultValue from the Prefilled story', () => {
    render(<Prefilled />);
    expect(screen.getByRole('radio', { name: '3 stars' })).toBeChecked();
  });

  it('renders a configurable number of stars', () => {
    render(<TenStars />);
    expect(screen.getAllByRole('radio')).toHaveLength(10);
  });

  it('replays the SelectsAStar interaction test', async () => {
    const { container } = render(<SelectsAStar />);
    await SelectsAStar.play!({ canvasElement: container });
    expect(SelectsAStar.args.onChange).toHaveBeenCalledWith(4);
  });
});
