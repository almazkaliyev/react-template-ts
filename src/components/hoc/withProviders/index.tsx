import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '@/store/store';

/**
 * Подключение провайдеров
 * @param App
 */
export const withProviders = (App: React.FC) => {
  return function ProvidersConnector({ ...props }) {
    return (
      <BrowserRouter>
        <ReduxProvider store={store}>
          <App {...props} />
        </ReduxProvider>
      </BrowserRouter>
    );
  };
};
