import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import { FaEnvelope } from "react-icons/fa"

const Message = ({}) => {
  return (
    <Form>
      <Card>
        <Card.Header>Message</Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formFrom">
                  <Form.Label>From</Form.Label>
                  <Form.Control
                    type="email"
                    name="from"
                    placeholder="Enter email"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formTo">
                  <Form.Label>To</Form.Label>
                  <Form.Control
                    type="email"
                    name="to"
                    placeholder="Enter email"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formContent">
                  <Form.Label>Content</Form.Label>
                  <Form.Control as="textarea" name="content" rows={3} />
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Card.Body>
        <Card.Footer>
          <Button>
            <FaEnvelope /> Send
          </Button>
        </Card.Footer>
      </Card>
    </Form>
  )
}

export default Message
