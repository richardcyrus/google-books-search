import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import API from '../utils/API';
import Header from '../components/Header';
import BookList from '../components/BookList';

/**
 * Displays the page for the `/` & `/search` routes. Presents the user
 * with a form where they can search for, view and save books from
 * the Google Books API.
 */
class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.searchBooks = this.searchBooks.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBookAction = this.handleBookAction.bind(this);

    this.state = {
      validated: false,
      pageTag: 'Search for and Save Books of Interest',
      action: 'save',
      books: [],
      query: ''
    };
  }

  /**
   * Send a request to the backend to find the books related to the term
   * entered by the user.
   *
   * @param {string} query The term send to the backend for book search.
   */
  searchBooks(query) {
    API.searchBooks(query)
      .then((res) => {
        const bookList = res.data.map((b) => {
          return {
            googleId: b.id,
            title: b.volumeInfo.title,
            subtitle: b.volumeInfo.subtitle || '',
            authors: b.volumeInfo.authors,
            description: b.volumeInfo.description,
            image: b.volumeInfo.imageLinks.thumbnail,
            link: b.volumeInfo.infoLink
          };
        });

        this.setState({ books: bookList });
      })
      .catch((error) => console.log(error));
  }

  /**
   * Handle the submission of the search form. Provides validation of the
   * field to ensure that a search term is always provided.
   *
   * @param {*} event
   */
  handleSubmit(event) {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      this.setState({ validated: true });
      this.searchBooks(this.state.query);
    }
  }

  /**
   * Save the term entered by the user in state, as they enter the text.
   *
   * @param {*} event
   */
  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  /**
   * Handle the saving of a book to the backend datastore.
   *
   * @param {object} book The book to save in the backend datastore.
   */
  handleBookAction(book) {
    API.saveBook(book)
      .then(() => this.searchBooks(this.state.query))
      .catch((error) => console.log(error));
  }

  /**
   * Render the page elements.
   */
  render() {
    const { validated } = this.state;
    return (
      <Container>
        <Row>
          <Col md={12}>
            <Header pageTag={this.state.pageTag} />
          </Col>
          <Col md={12}>
            <Card className="mt-4 shadow">
              <Card.Header className="border-bottom-0 bg-primary text-white">
                <h3>
                  <strong>
                    <FontAwesomeIcon icon="book" /> Book Search
                  </strong>
                </h3>
              </Card.Header>
              <Card.Body>
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={(e) => this.handleSubmit(e)}
                >
                  <Form.Group controlId="query">
                    <Form.Label>
                      <strong>Search</strong>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter a search term (Book or Writer)"
                      name="query"
                      required
                      onChange={this.handleInputChange}
                      value={this.state.query}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid search phrase.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <div className="d-flex justify-content-end">
                    <Button
                      variant="danger"
                      type="submit"
                      size="lg"
                      className="shadow"
                    >
                      Search
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card className="mt-4 shadow">
              <Card.Header className="border-bottom-0 bg-primary text-white">
                <h3>
                  <strong>
                    <FontAwesomeIcon icon="list-alt" /> Results
                  </strong>
                </h3>
              </Card.Header>
              <Card.Body>
                {!this.state.books.length ? (
                  <h2 className="text-center">Search for a Book to Begin!</h2>
                ) : (
                  <BookList
                    books={this.state.books}
                    handleBookAction={this.handleBookAction}
                    action={this.state.action}
                  />
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchPage;
