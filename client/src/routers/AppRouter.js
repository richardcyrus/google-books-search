import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNav from '../components/AppNav';
import AppFooter from '../components/AppFooter';
import SearchPage from '../pages/search';
import SavedPage from '../pages/saved';
import NotFound from '../pages/NotFound';

/**
 * Manage the registration of react-router-dom routes for the entire
 * application.
 *
 * Builds each page of the application based on the chosen route.
 */
function AppRouter() {
  return (
    <Router>
      <React.Fragment>
        <AppNav />
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route element={<NotFound />} />
        </Routes>
        <AppFooter />
      </React.Fragment>
    </Router>
  );
}

export default AppRouter;
