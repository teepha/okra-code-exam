/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route } from 'react-router-dom';

const renderRoute = route => (
  <Route
    key={route.name}
    path={route.path}
    exact={route.exact}
    component={route.component}
  />
);

const RouteManager = route => renderRoute(route);

export default RouteManager;
