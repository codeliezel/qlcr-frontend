import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Registration from './components/registration/reg.component';
import Dashboard from './components/dashboard/dash.component';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Registration} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}
