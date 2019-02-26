import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

/**
 * Render a List Group of all books passed in the props.books array.
 *
 * Also takes an `action` prop to determine the action performed by
 * the secondary button in the element. Valid values are `save`
 * and `delete`.
 *
 * The handleBookAction prop is executed when clicking the action button.
 *
 * @param {*} props
 */
function BookList(props) {
  return (
    <ListGroup as="ul">
      {props.books.map((book) => (
        <ListGroup.Item as="li" key={book.googleId}>
          <Row>
            <Col md={8}>
              <h3>{book.title}</h3>
              {book.subtitle !== undefined && book.subtitle.length > 0 && (
                <h5>{book.subtitle}</h5>
              )}
            </Col>
            <Col md={4}>
              <div className="btn-container">
                <Button
                  as="a"
                  variant="light"
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shadow"
                >
                  View
                </Button>
                {props.action === 'save' && (
                  <Button
                    onClick={() => props.handleBookAction(book)}
                    variant="primary"
                    className="ml-2 shadow"
                  >
                    Save
                  </Button>
                )}
                {props.action === 'delete' && (
                  <Button
                    onClick={() => props.handleBookAction(book._id)}
                    variant="danger"
                    className="ml-2 shadow"
                  >
                    Delete
                  </Button>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>Written by {book.authors.join(', ')}</Col>
          </Row>
          <Row>
            <Col xs={12} sm={4} md={2}>
              <img
                src={book.image}
                alt={book.title}
                className="img-thumbnail img-fluid w-100"
              />
            </Col>
            <Col xs={12} sm={8} md={10}>
              <p>{book.description}</p>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default BookList;
