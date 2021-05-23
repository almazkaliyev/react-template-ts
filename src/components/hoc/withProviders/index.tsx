import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from '@/store/store';

/**
 * Подключение провайдеров
 * @param App
 */
export const withProviders = (App: React.FC) => {
  return function ProvidersConnector({ ...props }) {
    return (
      <Router>
        <ReduxProvider store={store}>
          <App {...props} />
        </ReduxProvider>
      </Router>
    );
  };
};
