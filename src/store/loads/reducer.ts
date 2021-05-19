import { createReducer } from '@reduxjs/toolkit';

interface Load {
  loading: boolean;
  error: string;
}

const initialState: Record<string, Load> = {};

export const loadsReducer = createReducer(initialState, {});
