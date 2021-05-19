import { useSelector } from 'react-redux';

import { RootState } from '@/utils/sharedTypes';

/**
 * Рендерит компонент, если пользователь не аунтифицирован
 * @param Component
 */
export const withoutAuthOnly = (Component: React.FC) => {
  return function WithoutAuthGuard({ ...props }) {
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
    if (isLoggedIn) return null;
    return <Component {...props} />;
  };
};
