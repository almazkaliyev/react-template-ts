import 'regenerator-runtime/runtime';

import 'assets/less/app.less';

import { render } from 'react-dom';

import { setup } from 'hocs/setup';

import { App } from './App';

const AppWithSetup = setup(App);

render(<AppWithSetup />, document.getElementById('app'));

module?.hot?.accept();
