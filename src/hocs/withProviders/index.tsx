import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from 'store';

/**
 * Подключение провайдеров
 * @param App
 */
export const withProviders =
  (App: React.FC) =>
  ({ ...props }): React.ReactElement =>
    (
      <Provider store={store}>
        <BrowserRouter>
          <App {...props} />
        </BrowserRouter>
      </Provider>
    );
