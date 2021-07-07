import 'regenerator-runtime/runtime';

import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './App';
import { store } from './store';

render(
  <StrictMode>
    <Router>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </Router>
  </StrictMode>,
  document.getElementById('app'),
);

module?.hot?.accept();
