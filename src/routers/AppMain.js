import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
//import NotFoundPage from '../components/NotFounfPage';
import Header from '../components/Header';
import Home from '../components/Home';
// import HelpGoogleApiApp from '../components/HelpGoogleApiApp';

export const history = createBrowserHistory();

const AppMain = () => (
  <Router history={history}>
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
