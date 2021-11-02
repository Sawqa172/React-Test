import React from 'react';

import { useLocation, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// store
import { selectIsAuthenticated } from 'store/modules/selectors';

export default function PrivateRoute({ component: Component, ...restOfProps }) {
  const location = useLocation();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/auth/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
