import { beforeAll, expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import { setProjectAnnotations } from '@storybook/react';
import * as previewAnnotations from './.storybook/preview';

// Extend *this workspace's* vitest `expect` with jest-dom matchers. We do it
// manually (instead of importing '@testing-library/jest-dom/vitest') because
// that entry point resolves the root-hoisted vitest, which is a different
// version than the one this workspace runs — so its matchers land on the wrong
// `expect` instance and never reach our tests.
expect.extend(matchers);

// Applies the Storybook `preview` config (decorators, parameters, globals) to
// stories that are imported into tests via `composeStories`, so a story renders
// in Vitest exactly as it does in the Storybook UI.
const project = setProjectAnnotations([previewAnnotations]);

beforeAll(project.beforeAll);
