import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import OrphanagesMap from '../pages/OrphanagesMap';
import Orphanage from '../pages/DetailOrphanage';
import CreateOrphanages from '../pages/CreateOrphanage';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/app" component={OrphanagesMap} />

    <Route path="/orphanages/create" component={CreateOrphanages} />
    <Route path="/orphanages/:id" component={Orphanage} />
  </Switch>
)

export default Routes;