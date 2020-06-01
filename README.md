
# React pages boilerplate

This app shows the places a user introduce on the input form and a marker is added to the map. All the places a user show are registered in a redux state and all the markers are show to demonstrate
the functionality. The Map size has been limited in order to show the required functionality, and
all control actions has been limited too in order to avoid costs and unncessary request without a useful objective (zoom, dragger, etc). The same applied for mobile, only a part is shown and you can find places you see on that view.

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
* [google-maps-router](https://www.npmjs.com/package/google-maps-react) to handle fecth and map views that has been customized for the app
* [react-places-autocomplete](https://www.npmjs.com/package/google-maps-react)


## npm scripts

* `npm run build:dev` – build static site for development with webpack
* `npm run build:prod` – build static site for production with webpack + options
* `npm start:devserver` – starts development server with webpack-dev-server
* `npm run start` – start development with node js for static site generated on public folder
* `npm run heroku-postbuild` – build application for production on heroku
* `npm run lint` – check code formatting and rules for react code and JS.
* `npm run lint:fix` – fix all problems found on the code 
* `npm run prettier` – check code formatting rules defined on .prettierrc file
* `npm run lint-stage` – lints both JavaScript (with `npm run eslint`) and Sass files (with `npm run stylelint`) before commit on GitHub repository.
* `npm run test` – Run unitary test designed for components.
