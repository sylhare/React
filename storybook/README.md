# storybook

A demo frontend built as a small **design system**, documented with
[Storybook](https://storybook.js.org/) on the **Vite** builder and tested with
**Vitest**.

## What it demonstrates

| Feature                             | Where                                                        |
|-------------------------------------|--------------------------------------------------------------|
| Different versions of the same UI   | `Button` variants/sizes/states in `Button.stories.tsx`       |
| Component hierarchy in the sidebar  | `title: 'Design System/Atoms/…'` and `.../Molecules/…`       |
| Interaction tests                   | `play` functions in the stories + Interactions panel         |
| Tests around stories                | `*.test.tsx` reuse stories via `composeStories` under Vitest |
| Accessibility checks                | `@storybook/addon-a11y`                                      |
| Auto-generated docs                 | `autodocs` tag + `Introduction.mdx`                          |

## Components

- **Atoms** — `Button`, `Badge`
- **Molecules** — `Card` (composes `Button` + `Badge`), `Rating` (interactive)

## Commands

Run from the repo root:

```bash
yarn workspace storybook storybook        # start Storybook on http://localhost:6006
yarn workspace storybook build-storybook  # build static Storybook to storybook-static/
yarn workspace storybook dev              # start the Vite demo app
yarn workspace storybook build            # typecheck + production build to dist/
yarn workspace storybook lint             # ESLint (incl. eslint-plugin-storybook)
yarn workspace storybook test             # run Vitest (stories run as tests)
```

## How the stories become tests

Each `*.test.tsx` imports its sibling `*.stories.tsx` and wraps it with
`composeStories`, which applies the global `preview` config (see
`.storybook/preview.ts` wired through `vitest.setup.ts`). Rendering `<Primary />`
in a test is identical to viewing the *Primary* story in the UI, and a story's
`play` function can be replayed directly as an interaction test.
