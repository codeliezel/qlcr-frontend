import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

const token = window.localStorage.getItem('QLCRtoken') || '';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrivateRoute : React.FC<any> = ({ component: Component, ...rest })  => {
  return (
    <Route
      {...rest}
      render={(props) => (token ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />)}
    />
  );
}

export default PrivateRoute;