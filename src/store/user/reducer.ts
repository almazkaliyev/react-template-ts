import { createReducer } from '@reduxjs/toolkit';

import { login } from '@/store/user/actions';

const initialState = {
  isLoggedIn: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(login, (state) => {
    state.isLoggedIn = true;
  });
});
