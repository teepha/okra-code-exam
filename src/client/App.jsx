import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import store from './store';
import RouteManager from './components/RouteManager';

const App = () => (
  <Provider store={store}>
    <Suspense fallback={<div>Loading</div>}>
      <Router>
        <React.Fragment>
          <Switch>
            <Switch>{routes.map(route => RouteManager(route))}</Switch>
          </Switch>
        </React.Fragment>
      </Router>
    </Suspense>
  </Provider>
);

export default App;
