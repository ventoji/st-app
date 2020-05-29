
# React pages boilerplate

This boilerplate introduces a simple way for developing a React applications.

## Technologies

* [Webpack@4](https://webpack.js.org/) as module bundler
* [Babel](https://babeljs.io/) with [babel-preset-env](https://babeljs.io/docs/plugins/preset-env/) for js and jsx transpiling
* [react-hot-loader@4](https://github.com/gaearon/react-hot-loader) for extremely fast hot updates
* [Eslint](http://eslint.org/) and [Stylelint](http://stylelint.io/) for linting
* [Prettier](https://prettier.io/) for automated code formatting
* [Jest](https://facebook.github.io/jest/) with [Enzyme](http://airbnb.io/enzyme/) for testing
* CSS Modules, [Sass](http://sass-lang.com/) and [PostCSS](http://postcss.org/) with [Autoprefixer](https://github.com/postcss/autoprefixer) for styles processing

## Preinstalled and configured libraries

* [react@16](https://github.com/facebook/react)
* [redux](https://github.com/reactjs/redux)
* [react-router@5](https://github.com/ReactTraining/react-router) with Router
* [react-redux](https://github.com/reactjs/react-redux)


## npm scripts

* `npm run build:dev` – build static site for development with webpack
* `npm run build:prod` – build static site for production with webpack + options
* `npm start:devserver` – starts development server with webpack-dev-server
* `npm run start` – start development with node js for static site generated on public folder
* `npm run lint` – check code formatting and rules for react code and JS.
* `npm run lint:fix` – fix all problems found on the code 
* `npm run prettier` – check code formatting rules defined on .prettierrc file
* `npm run lint-stage` – lints both JavaScript (with `npm run eslint`) and Sass files (with `npm run stylelint`) before commit on GitHub repository.
* `npm run test` – Run unitary test designed for components.
