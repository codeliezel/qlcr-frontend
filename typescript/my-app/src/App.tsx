import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import PrivateRoute from './components/pr.component';
import Registration from './components/reg.component';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Registration} />
      </Switch>
    </Router>
  );
}


export default App;