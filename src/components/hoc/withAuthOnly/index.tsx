import { useSelector } from 'react-redux';

import { RootState } from '@/utils/sharedTypes';

/**
 * Рендерит компонент, если пользователь аунтифицирован
 * @param Component
 */
export const withAuthOnly = (Component: React.FC) => {
  return function WithAuthGuard({ ...props }) {
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
    if (!isLoggedIn) return null;
    return <Component {...props} />;
  };
};
