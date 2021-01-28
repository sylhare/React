# React 

Some react tests.


## Basic

To start with the syntax.
No npm / yarn installation required to test it, but it might be getting old (2016).

## App

This is the starting [one](src/create-app/README.md).
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


## Sources

For learning purposes:

- Facebook: [React tutorial](https://facebook.github.io/react/tutorial/tutorial.html#what-were-building), [create-react-app](https://github.com/facebook/create-react-app)
- Scotch.io: [React tutorial](https://scotch.io/tutorials/learning-react-getting-started-and-concepts)
- FreeCodeCamp: [React App One](https://www.freecodecamp.org/news/develop-deploy-first-fullstack-web-app/), [React App Two](https://www.freecodecamp.org/news/fullstack-react-blog-app-with-express-and-psql/)

