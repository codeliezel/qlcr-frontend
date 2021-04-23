import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/private-route/private-route.component';
import Registration from './components/authentication/reg.component';
import Dashboard from './components/dashboard/dash.component';
import Login from './components/authentication/login.component';
import AddResource from './components/resources/create-resource.component';
import Resources from './components/resources/get-resources.component';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/resource" component={AddResource} />
        <PrivateRoute exact path="/resources" component={Resources} />
      </Switch>
    </Router>
  );
}
