import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Option1 from './subnav1/Option1';
import Option2 from './subnav1/Option2';

import Page404 from './Page404';

const routes = ({ match }) =>
  <Switch>
    <Route exact path="/subnav1/Option1" component={Option1} />
    <Route exact path="/subnav1/Option2" component={Option2} />

    <Route component={Page404} />
  </Switch>;

export default routes;
