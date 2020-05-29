import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import NotFoundPage from '../components/NotFounfPage';
import Header from '../components/Header';
import Home from '../components/Home';

export const history = createBrowserHistory();

const AppMain = () => (
  <Router history={history}>
    <Header />
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppMain;
