# React

Experimentation with React. [Get started](https://reactjs.org/)!

This repository is a [Yarn workspace](https://yarnpkg.com/features/workspaces) monorepo managed with Yarn 4 (Berry).

## Getting started

Install [Node.js](https://nodejs.org/) and enable Corepack (bundled with Node.js 16+):

```bash
corepack enable
corepack prepare yarn@stable --activate
```

Then install all workspace dependencies from the root:

```bash
yarn install
```

## Running tests

Run tests across all workspaces at once:

```bash
yarn workspaces foreach -A run test
```

Run tests for a single workspace:

```bash
yarn workspace <workspace-name> test
```

For example:

```bash
yarn workspace nextjs test
yarn workspace app test
yarn workspace remix-react-testing test
```

## Adding a new workspace

1. Create a new directory at the root of the repository and add a `package.json` with a unique `name` field:

```json
{
  "name": "my-new-app",
  "private": true,
  "scripts": {
    "build": "...",
    "test": "..."
  }
}
```

2. Register it in the root `package.json` workspaces list:

```json
{
  "workspaces": [
    "app-misc",
    "chakra-ui",
    "my-new-app"
  ]
}
```

3. Run `yarn install` from the root to pick it up.

The new workspace's dependencies will be hoisted to the root `node_modules` automatically. Each workspace should declare its own dependencies — do not add application dependencies to the root `package.json`.

## Workspaces

| Directory  | Name                  | Description                        |
|------------|-----------------------|------------------------------------|
| `app-misc` | `app`                 | Potluck of different examples      |
| `chakra-ui`| `chakra-ui`           | Example with Chakra UI             |
| `dnd`      | `react-dnd-example-3` | Example with Drag and Drop         |
| `nextjs`   | `nextjs`              | Example with Next.js               |
| `remix`    | `remix-react-testing` | Example with Remix                 |
| `router`   | `frontend-react`      | Example with React Router          |

## Basic

To start with the syntax.
No npm / yarn installation required to test it, but it might be getting old (2016).

## Sources

For learning purposes:

- Facebook: [React tutorial](https://facebook.github.io/react/tutorial/tutorial.html#what-were-building),
  [create-react-app](https://github.com/facebook/create-react-app)
- Scotch.io: [React tutorial](https://scotch.io/tutorials/learning-react-getting-started-and-concepts)
- FreeCodeCamp: [React App One](https://www.freecodecamp.org/news/develop-deploy-first-fullstack-web-app/),
  [React App Two](https://www.freecodecamp.org/news/fullstack-react-blog-app-with-express-and-psql/)
- Free Online rest API: [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/)
- React Documentation: [API calls](https://reactjs.org/docs/faq-ajax.html),
  [conditional rendering](https://reactjs.org/docs/conditional-rendering.html)
- Redux Documentation: [react-redux](https://react-redux.js.org/introduction/quick-start),
  [React-redux examples](https://github.com/reduxjs/redux/tree/3cf3b0f48c4093aaa094eedb11efa8656e9b0309/examples),
  [Access redux store](https://medium.com/swlh/accessing-redux-from-components-in-react-react-native-d9f0e4cdb2dc),
  [Access redux store from outside component](https://daveceddia.com/access-redux-store-outside-react/),
  [React + Redux real world example](https://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example)
- Other Documentation: [Pass props to component](https://www.robinwieruch.de/react-pass-props-to-component),
  [Remove element from list](https://www.robinwieruch.de/react-remove-item-from-list),
  [One page app](https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm),
  [react with jwt](https://bezkoder.com/spring-boot-react-jwt-auth/),
  [Real world example](https://github.com/bezkoder/react-redux-hooks-jwt-auth/tree/28a25f525aee8f6a73f2bd1165c0b868aeedb7b5),
  [react with login](https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications#step-1-%E2%80%94-building-a-login-page),
  [Private route](https://ui.dev/react-router-v4-protected-routes-authentication/)
