import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Vite powers both the demo app (dev/build/preview) and the Storybook builder
// (see .storybook/main.ts framework "@storybook/react-vite"). The `test` block
// wires up Vitest so we can run the stories as tests (portable stories).
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    css: true,
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
  },
});
