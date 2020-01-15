import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Controller, Header } from 'Components';

import { Landing, Second, Clip } from 'Pages';

import './App.scss';

export default () => (
  <Controller>
    <Router>
      <Header />
      <Switch>
        <Route path="/second" component={ Second } />
        <Route path="/clip/:id" component={ Clip } />
        <Route path="/" component={ Landing } />
      </Switch>
    </Router>
  </Controller>
)
