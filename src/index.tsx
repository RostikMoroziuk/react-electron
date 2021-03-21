import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
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
