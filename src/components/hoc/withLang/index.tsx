import React from 'react';
import { useSelector } from 'react-redux';

import { Languages } from '@/constants/lang';
import { RootState } from '@/utils/sharedTypes';
import { enDict } from '@/lang/en';
import { ruDict } from '@/lang/ru';

type LanguageDict = typeof ruDict;

const langToDict = {
  [Languages.ru]: ruDict,
  [Languages.en]: enDict,
};

export const langContext = React.createContext<any>(null);

export type LanguageConfig = typeof ruDict;

/**
 * В зависимости от состояния кладет в контекст языковой объект
 * @param App
 */
export const withLang = (App: React.FC<any>) => {
  return function LangConnector({ ...props }) {
    const lang: 'ru' | 'en' = useSelector((state: RootState) => state.UI.lang);
    const dict: LanguageDict = langToDict[lang];

    return (
      <langContext.Provider value={dict}>
        <App {...props} />
      </langContext.Provider>
    );
  };
};
