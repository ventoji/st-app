import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppMain from './routers/AppMain';
import configureStore from './store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

// const state = store.getState();
// console.log(store.getState());
// const unsubscribe = store.subscribe(() => console.log(store.getState()));

const app = (
  <Provider store={store}>
    <AppMain />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(app, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

setTimeout(() => {
  renderApp();
}, 1500);
