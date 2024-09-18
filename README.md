# React

Experimentation with React. [Get started](https://reactjs.org/)!

## Basic

To start with the syntax.
No npm / yarn installation required to test it, but it might be getting old (2016).

## Misc-App

Potluck of different examples.

## Create-App

This is the starting [one](examples/create-app/README.md).
Preferably using [yarn](https://yarnpkg.com/) as it is backed by facebook as well.

Start with:

```bash
yarn start
```

Run the test with jest using:

```bash
yarn test
```

### Common errors

- > error babel-jest@26.6.3: The engine "node" is incompatible with this module. Expected version ">= 10.14.2". Got "10.13.0"

Just update node to the latest version. if you are using [`n`](https://github.com/tj/n) (useful when working with different node versions) just do:

```bash
n latest
```

- > Cannot find module '@testing-library/react/types' from 'src/App.test.js'

It may be deprecated and may not have been fixed but it works if you remove the `/types` and use directly:

```js
import { render, screen } from '@testing-library/react';
```

## Chakra UI

Example with Chakra UI and React.

## DnD

Example with Drag and Drop.

## Router

Example with React Router.

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
