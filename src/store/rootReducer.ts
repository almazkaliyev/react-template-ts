import { combineReducers } from 'redux';

import { UIReducer } from './UI/reducer';
import { loadsReducer } from '@/store/loads/reducer';
import { modalsReducer } from './modals/reducer';
import { userReducer } from '@/store/user/reducer';

export const rootReducer = combineReducers({
  UI: UIReducer,
  loads: loadsReducer,
  modals: modalsReducer,
  user: userReducer,
});
