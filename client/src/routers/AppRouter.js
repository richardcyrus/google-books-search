import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/saved" component={SavedPage} />
          <Route component={NotFound} />
        </Switch>
        <AppFooter />
      </React.Fragment>
    </Router>
  );
}

export default AppRouter;
