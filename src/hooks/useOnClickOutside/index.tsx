import { useEffect } from 'react';

/**
 * Для отлавливания клика вне элемента
 * @param ref
 * @param handler
 * @param exceptionId
 */
export function useOnClickOutside(ref: any, handler: () => void, exceptionId?: string) {
  useEffect(() => {
    const listener = (event: any) => {
      let exceptionEl;
      if (exceptionId) exceptionEl = document.getElementById(exceptionId);
      if (
        !ref?.current ||
        ref.current.contains(event.target) ||
        exceptionEl?.contains(event.target) ||
        exceptionEl === event.target
      ) {
        return;
      }

      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
