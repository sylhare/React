import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { Rating } from './Rating';

const meta = {
  title: 'Design System/Molecules/Rating',
  component: Rating,
  tags: ['autodocs'],
  args: { max: 5, defaultValue: 0, onChange: fn() },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Prefilled: Story = {
  args: { defaultValue: 3 },
};

export const TenStars: Story = {
  args: { max: 10, defaultValue: 7 },
};

/** Interaction test: clicking a star updates the selection and fires onChange. */
export const SelectsAStar: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const fourStars = canvas.getByRole('radio', { name: '4 stars' });
    await userEvent.click(fourStars);
    await expect(fourStars).toBeChecked();
    await expect(args.onChange).toHaveBeenCalledWith(4);
  },
};
