import React from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
