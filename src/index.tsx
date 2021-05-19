import 'regenerator-runtime/runtime';

import { render } from 'react-dom';

import './assets/css/fonts.css';
import './assets/css/variables.css';
import './assets/css/base.css';

import '@/utils/axios';
import { App } from './App';
import { setup } from 'hoc/setup';

const container = document.getElementById('app');
const AppWithSetup = setup(App);

render(<AppWithSetup />, container);
