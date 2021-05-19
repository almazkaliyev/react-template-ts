import * as React from 'react';
import { useLocation } from 'react-router';

/**
 * При переходе на страницу устанавливает скролл в 0 0
 * @param Component
 */
export const withScrollReset = (Component: React.FC) => {
  return function ScrollReset({ ...props }) {
    const location = useLocation();

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    return <Component {...props} />;
  };
};
