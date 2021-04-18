import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../utils/session';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
      !getToken() ? (
        <React.Fragment>
          <Component {...props} />
        </React.Fragment>
      ) : (
        <Redirect to='/dashboard' />
      )
    }
  />
);

export default PublicRoute;
