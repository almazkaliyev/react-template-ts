import { Suspense } from 'react';
import { Outlet } from 'react-router';

export const MainLayout: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Outlet />
  </Suspense>
);
