import { createReducer } from '@reduxjs/toolkit';

interface UserState {
  isLoggedIn: boolean;
  accessToken: null | string;
}

const initialState: UserState = {
  isLoggedIn: false,
  accessToken: null,
};

export const userReducer = createReducer(initialState, (builder) => {});
