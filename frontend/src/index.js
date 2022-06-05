/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from './CommonComponents/AppHeader';
import AppFooter from './CommonComponents/AppFooter';

import './bootstrap.min.css';
import store from './RootRedux/index';
import NAVIGATION_ROUTES from './Navigation/index';

ReactDOM.render(
  // missing <Provider store={store}> in Line 20 and 33
  <React.StrictMode>
      
      <Router>
        <AppHeader />
        <Suspense fallback={<div />}>
          <h1> Hello World</h1>
          <Routes>
            {Object.values(NAVIGATION_ROUTES).map((route, key) => (
              <Route key={key} {...route} />
            ))}
          </Routes>
        </Suspense>
        <AppFooter />
      </Router>

  </React.StrictMode>,
  document.getElementById('root'),
);