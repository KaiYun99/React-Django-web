/* eslint-disable react/react-in-jsx-scope */
import { lazy } from 'react';

const HomePage = lazy(() => import('../Components/HomePage'));

const NAVIGATION_ROUTES = Object.freeze({
  // Misc Routes
  homePage: {
    path: '/',
    exact: true,
    element: <HomePage />,
  },
});

export default NAVIGATION_ROUTES;
