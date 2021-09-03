import { RouteProps } from 'react-router';
import { Route } from 'react-router-dom';

import { PrivateRoute } from './privateRoute';

interface RouteWrapperProps extends RouteProps {
  auth?: boolean;
}

export const RouteWrapper: React.FC<RouteWrapperProps> = ({ auth = false, ...props }) => {
  const WitchRoute = auth ? PrivateRoute : Route;

  return <WitchRoute {...props} />;
};
