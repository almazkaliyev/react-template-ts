import { OSTypes } from '@/constants/other';

/**
 * Вернет слово во множественном числе
 * @param number Количество
 * @param labelsArray Массив слов. Пример - [день, дня, дней]
 */
function getPlural(number: number, labelsArray?: [string, string, string] | [string, string]) {
  if (!labelsArray) return '';
  if (labelsArray.length === 2) return number === 1 ? labelsArray[0] : labelsArray[1];
  if (number % 1) return [labelsArray[1]];
  if (number.toString().endsWith('1') && number !== 11) return labelsArray[0];
  else if (
    (number.toString().endsWith('2') || number.toString().endsWith('3') || number.toString().endsWith('4')) &&
    number !== 12 &&
    number !== 13 &&
    number !== 14
  ) {
    return labelsArray[1];
  } else return labelsArray[2];
}

const detectOSType = (): OSTypes => {
  if (/(iPhone|iPod|iPad)/i.test(navigator.platform)) return OSTypes.ios;
  if (/(Mac)/i.test(navigator.platform)) return OSTypes.mac;
  if (navigator.userAgent.toLowerCase().indexOf('android') > -1) return OSTypes.android;
  else return OSTypes.other;
};

/**
 * Определят ширину скроллбара в браузере. Независимо от того, если полоса прокрутки на элементе или нет
 */
function getScrollbarWidth() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  document.body.appendChild(outer);
  const inner = document.createElement('div');
  outer.appendChild(inner);
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  // @ts-ignore
  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
}

/**
 * Возвращает текущую ширину полосы прокрутки документа
 */
function getDocumentScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

export { getPlural, detectOSType, getScrollbarWidth, getDocumentScrollbarWidth };
