import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function AppNav() {
  return (
    <React.Fragment>
      <Navbar className="mb-2 p-3" bg="light" variant="light" expand="lg">
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
