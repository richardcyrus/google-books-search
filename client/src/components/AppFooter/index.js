import React from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * The Page Footer component. It's the common footer for all pages
 * in this application.
 */
const AppFooter = () => (
  <footer className="mt-4">
    <Container>
      <hr />
      <p>
        <FontAwesomeIcon icon={['fab', 'react']} /> Proudly built using React.js
      </p>
    </Container>
  </footer>
);

export default AppFooter;
