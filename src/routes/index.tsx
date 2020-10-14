import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/index'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
)

export default Routes;