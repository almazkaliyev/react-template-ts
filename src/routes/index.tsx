import React from 'react';
import { PartialRouteObject } from 'react-router';
import { useRoutes } from 'react-router-dom';

import { MainLayout } from 'layouts/MainLayout';

import { RouteWrapper } from './config';
import paths from './paths';

const NotFoundPage = React.lazy(() => import(/* webpackChunkName: "404" */ 'pages/NotFoundPage'));
const MainPage = React.lazy(() => import(/* webpackChunkName: "main'" */ 'pages/MainPage'));

const routes: PartialRouteObject[] = [
  {
    path: paths.main,
    element: <RouteWrapper element={<MainLayout />} />,
    children: [
      {
        path: paths.main,
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
