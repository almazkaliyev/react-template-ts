import { Route, Switch } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from './components/pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};
