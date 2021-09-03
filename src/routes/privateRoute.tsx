import { Navigate, RouteProps } from 'react-router';
import { Route } from 'react-router-dom';

import paths from './paths';

export const PrivateRoute: React.FC<RouteProps> = (props) => {
  const isLoggedIn = true;
  return isLoggedIn ? <Route {...props} /> : <Navigate to={paths.login} />;
};
