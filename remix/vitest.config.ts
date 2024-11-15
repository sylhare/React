/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./__tests__/vitest.setup.ts'],
    watch: false,
    globals: true,
    reporters: ['default'],
    coverage: {
      reportsDirectory: './coverage',
      reporter: ['lcov', 'text'],
      provider: 'v8',
      exclude: [
        '**/coverage/**',
        '**/*.config.js',
        '**/*.config.ts',
        '**/build/**',
      ],
    },
  },
});
