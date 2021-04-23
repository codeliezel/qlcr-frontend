/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const token = window.localStorage.getItem('QLCRtoken') || '';

// eslint-disable-next-line react/prop-types
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      // eslint-disable-next-line react/jsx-props-no-spreading
      // eslint-disable-next-line react/prop-types
      render={(props) => (token ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />)}
    />
  );
}

export default PrivateRoute;
