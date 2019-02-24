import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/Header';

class SearchPage extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = { validated: false };
  }

  handleSubmit(event) {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({ validated: true });
  }

  render() {
    const { validated } = this.state;
    return (
      <Container>
        <Row>
          <Col md={12}>
            <Header pageTag={'Search for and Save Books of Interest'} />
          </Col>
          <Col md={12}>
            <Card className="mt-4 shadow">
              <Card.Header className="border-bottom-0">
                <h3>
                  <strong>
                    <FontAwesomeIcon icon="book" />
                    &nbsp;Book Search
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
                      <strong>Book</strong>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Airframe"
                      name="q"
                      required
                    />
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
              <Card.Header className="border-bottom-0">
                <h3>
                  <strong>
                    <FontAwesomeIcon icon="list-alt" />
                    &nbsp;Results
                  </strong>
                </h3>
              </Card.Header>
              <Card.Body>
                <h2 className="text-center">Search for a Book to Begin!</h2>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchPage;
