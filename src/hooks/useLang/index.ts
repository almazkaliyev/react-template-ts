import { useContext } from 'react';

import { LanguageConfig, langContext } from 'hoc/withLang';

interface Selector {
  (langConfig: LanguageConfig): any;
}

/**
 * Вернет узел объекта текущего языка
 * @param selector Функция-селектор по всему языковому объекту (Как useSelector в ридакс).
 * Если не передан, вернет объект полностью
 */
export const useLang = (selector?: Selector) => {
  const dict = useContext(langContext);
  if (!selector) return dict;
  return selector(dict);
};
