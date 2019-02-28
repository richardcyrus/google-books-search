import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NotFound() {
  return (
    <div className="not-found">
      <Container>
        <Row>
          <Col xs={12} sm={4} md={2}>
            <div className="not-found__icon">
              <FontAwesomeIcon icon="book-dead" />
            </div>
          </Col>
          <Col xs={12} sm={8} md={10}>
            <div className="not-found__content">
              <h1 className="not-found__title">
                <strong>Oh no! Page Not Found</strong>
              </h1>
              <p className="not-found__help">
                Check that you typed the address correctly, go back to your
                previous page or try using our navigation bar to find something
                specific.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NotFound;
