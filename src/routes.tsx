import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import AppProvider from './hooks';

const Routes: React.FC = () => (
  <AppProvider>
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" exact component={Home} />
    </Switch>
  </AppProvider>
);

export default Routes;
