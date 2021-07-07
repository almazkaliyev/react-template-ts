import 'assets/scss/app.scss';

import { Route, Switch } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export const App: React.FC = () => (
    <Switch>
      <Route component={MainPage} exact path="/" />
      <Route component={NotFoundPage} path="*" />
    </Switch>
  );
