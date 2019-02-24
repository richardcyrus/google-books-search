import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppNav from '../components/AppNav';
import AppFooter from '../components/AppFooter';
import SearchPage from '../pages/search';

function AppRouter() {
  return (
    <Router>
      <React.Fragment>
        <AppNav />
        <Route exact path="/" component={SearchPage} />
        <AppFooter />
      </React.Fragment>
    </Router>
  );
}

export default AppRouter;
