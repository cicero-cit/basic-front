import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/signin" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/" component={Home} />
  </Switch>
);

export default Routes;
