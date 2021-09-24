import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/rootReducer';

const selectUserState = (state: RootState) => state.user;

export const selectIsLoggedIn = createSelector(selectUserState, (user) => user.isLoggedIn);
