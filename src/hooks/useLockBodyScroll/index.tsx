import { useLayoutEffect } from 'react';

import { getDocumentScrollbarWidth, getScrollbarWidth } from '@/utils/helpers';

const removeScrollBar = (): void => {
  if (!getDocumentScrollbarWidth()) return;
  document.body.style.overflow = 'hidden';
  document.body.style.marginRight = getScrollbarWidth() + 'px';
};

const recoverScrollBar = (originalStyle: string): void => {
  document.body.style.overflow = originalStyle;
  document.body.style.marginRight = '0px';
};

/**
 * Блокирует скролл на странице
 * @param isOpen
 */
export function useLockBodyScroll(isOpen: boolean) {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isOpen) removeScrollBar();
    else recoverScrollBar(originalStyle);
    return () => recoverScrollBar(originalStyle);
  }, [isOpen]);
}
