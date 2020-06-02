/**
 * Main component for the App
 * Home Conatins the Map and the Searcher componens
 */

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from '../components/Header';
import Home from '../components/Home';

export const history = createBrowserHistory();

const AppMain = () => (
  <Router history={history}>
    <Header />
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </div>
  </Router>
);

export default AppMain;
