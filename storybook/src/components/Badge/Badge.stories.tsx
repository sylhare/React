import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'Design System/Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: { children: 'Badge' },
  argTypes: {
    tone: {
      control: 'inline-radio',
      options: ['neutral', 'success', 'warning', 'info'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = { args: { tone: 'neutral', children: 'Draft' } };
export const Success: Story = { args: { tone: 'success', children: 'Active' } };
export const Warning: Story = { args: { tone: 'warning', children: 'Pending' } };
export const Info: Story = { args: { tone: 'info', children: 'Beta' } };

/** Every tone rendered together for a quick visual overview. */
export const AllTones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Badge tone="neutral">Draft</Badge>
      <Badge tone="success">Active</Badge>
      <Badge tone="warning">Pending</Badge>
      <Badge tone="info">Beta</Badge>
    </div>
  ),
};
