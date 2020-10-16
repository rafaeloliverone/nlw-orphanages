import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/index'
import OrphanagesMap from '../pages/OrphanagesMap'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/app" component={OrphanagesMap} />
  </Switch>
)

export default Routes;