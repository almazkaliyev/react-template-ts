import { createReducer } from '@reduxjs/toolkit';

import { setLanguageToEn, setLanguageToRu } from './actions';
import { Languages } from '@/constants/lang';

const initialState = {
  lang: navigator.language === 'ru-RU' ? Languages.ru : Languages.en,
};

export const UIReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLanguageToRu, (state) => {
      state.lang = Languages.ru;
    })
    .addCase(setLanguageToEn, (state) => {
      state.lang = Languages.en;
    });
});
