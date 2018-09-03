import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import ContentDemoPage from './ContentDemoPage';
import Demo1 from './content/Demo1';

import Page404 from './Page404';

const routes = ({ match }) =>
  <Switch>
    <Route exact path="/content/demo" component={ContentDemoPage} />
    <Route exact path="/content/demo1" component={Demo1} />

    {/* <Route component={Page404} /> */}
  </Switch>;

export default routes;
