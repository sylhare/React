import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  // Pick up MDX docs pages and every *.stories.* file under src/.
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials', // docs, controls, actions, viewport, backgrounds, toolbars
    '@storybook/addon-interactions', // play-function interaction testing panel
    '@storybook/addon-a11y', // accessibility checks per story
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag', // stories tagged "autodocs" get a generated docs page
  },
};

export default config;
