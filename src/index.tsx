import 'regenerator-runtime/runtime';

import { render } from 'react-dom';

import '@/utils/axios';
import { App } from './App';
import { setup } from 'hoc/setup';

const container = document.getElementById('app');
const AppWithSetup = setup(App);

render(<AppWithSetup />, container);

module?.hot?.accept();
