import { createReducer } from '@reduxjs/toolkit';

interface UserState {
  accessToken: null | string;
}

const initialState: UserState = {
  accessToken: null,
};

export const userReducer = createReducer(initialState, (builder) => {});
