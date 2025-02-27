import { vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

installGlobals();

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    remix({
      // ignore tests
      ignoredRouteFiles: ['**/__*.*', '**/*.test.{js,jsx,ts,tsx}'],
    }),
  ],
});
