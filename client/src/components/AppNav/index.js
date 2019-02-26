import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

/**
 * The default Navigation Bar for all pages in this application.
 * Uses react-router-dom `NavLink` elements for the different views,
 * and a react-router-dom `Link` element for the Brand in the
 * Navigation Bar.
 */
function AppNav() {
  return (
    <React.Fragment>
      <Navbar className="mb-2 p-3" bg="primary" variant="dark" expand="sm">
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        <Navbar.Toggle aria-controls="books-navbar-nav" />
        <Navbar.Collapse id="books-navbar-nav">
          <Nav className="mr-auto">
            <NavLink exact to="/" activeClassName="active" className="nav-link">
              Search
            </NavLink>
            <NavLink
              exact
              to="/saved"
              activeClassName="active"
              className="nav-link"
            >
              Saved
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default AppNav;
