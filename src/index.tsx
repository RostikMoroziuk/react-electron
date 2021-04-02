import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory, createHashHistory } from 'history';
import { isElectron } from './utils';
import Home from './Home';
import About from './About';
import './index.css';

export const history = isElectron()
  ? createHashHistory()
  : createBrowserHistory();


ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about' exact>
          <About />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
