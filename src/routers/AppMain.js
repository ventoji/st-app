/**
 * Main component for the App
 * Home Conatins the Map and the Searcher componens
 */

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from '../components/Header';
import Home from '../components/Home';

export const history = createBrowserHistory();

const AppMain = () => (
  <Router forceRefresh={false}>
    <Header />
    <div>
      <Switch>
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
);

export default AppMain;
