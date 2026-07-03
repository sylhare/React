import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { Card } from './Card';

const meta = {
  title: 'Design System/Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    title: 'Design tokens',
    description:
      'Reusable variables for colour, spacing and typography that keep the UI consistent.',
    actionLabel: 'Learn more',
    onAction: fn(),
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const WithSuccessStatus: Story = {
  args: { status: { label: 'Active', tone: 'success' } },
};

export const WithWarningStatus: Story = {
  args: {
    title: 'Migration pending',
    description: 'This component still uses the legacy theme and needs an update.',
    status: { label: 'Pending', tone: 'warning' },
    actionLabel: 'Review',
  },
};

/** Interaction test: clicking the action button calls the handler. */
export const ActionIsClickable: Story = {
  args: { status: { label: 'Beta', tone: 'info' } },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /learn more/i }));
    await expect(args.onAction).toHaveBeenCalledTimes(1);
  },
};
