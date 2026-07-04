import type { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    // Auto-detect args named onXxx and log them in the Actions panel.
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Extra viewports to demonstrate responsive UI variants in the toolbar.
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default preview;
