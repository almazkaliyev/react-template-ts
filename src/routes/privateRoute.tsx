import { useSelector } from 'react-redux';
import { Navigate, RouteProps } from 'react-router';
import { Route } from 'react-router-dom';

import { Paths } from 'constants/routes';
import { selectIsLoggedIn } from 'store/user/selectors';

export const PrivateRoute: React.FC<RouteProps> = (props) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Route {...props} /> : <Navigate to={Paths.login} />;
};
