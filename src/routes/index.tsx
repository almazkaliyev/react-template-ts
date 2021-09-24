import React from 'react';
import { PartialRouteObject } from 'react-router';
import { useRoutes } from 'react-router-dom';

import { Paths } from 'constants/routes';
import { MainLayout } from 'layouts/MainLayout';

import { RouteWrapper } from './config';

const NotFoundPage = React.lazy(() => import(/* webpackChunkName: "404" */ 'pages/NotFoundPage'));
const MainPage = React.lazy(() => import(/* webpackChunkName: "main'" */ 'pages/MainPage'));

const routes: PartialRouteObject[] = [
  {
    path: Paths.main,
    element: <RouteWrapper element={<MainLayout />} />,
    children: [
      {
        path: Paths.main,
        element: <RouteWrapper element={<MainPage />} />,
      },
      {
        path: '*',
        element: <RouteWrapper element={<NotFoundPage />} />,
      },
    ],
  },
];

export const RenderRoute: React.FC = () => useRoutes(routes);
