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
          <Row className="book-list__header">
            <Col md={8}>
              <h3 className="book__title">{book.title}</h3>
              {book.subtitle !== undefined && book.subtitle.length > 0 && (
                <h5 className="book__subtitle">{book.subtitle}</h5>
              )}
            </Col>
            <Col md={4} className="book-list__btn-container">
              <div className="btn-container">
                <Button
                  as="a"
                  variant="secondary"
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
            <Col md={6}>
              <p className="book-list__authors">
                Written by {book.authors.join(', ')}
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={4} md={2}>
              <img
                src={book.image}
                alt={book.title}
                className="book-list__thumbnail img-thumbnail img-fluid w-100"
              />
            </Col>
            <Col xs={12} sm={8} md={10}>
              <p className="book-list__description">{book.description}</p>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default BookList;
