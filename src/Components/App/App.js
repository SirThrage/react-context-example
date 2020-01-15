import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Controller } from 'Components';

import { Landing, Second } from 'Pages';

import './App.scss';

export default () => (
  <Controller>
    <Router>
      <Switch>
        <Route path="/second" component={ Second } />
        <Route path="/" component={ Landing } />
      </Switch>
    </Router>
  </Controller>
)
