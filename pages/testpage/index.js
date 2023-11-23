import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const initialFormValues = {};

function TestPage() {
  const [formData, setFormData] = useState(initialFormValues);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("==submit the form==", e);
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs lg="6">
          Name: {formData.name}
        </Col>

        <Col xs lg="6">
          <Card className="">
            <Card.Header>User Detail Form</Card.Header>
            <Card.Body>
              <Form className="p-2" onSubmit={handleSubmitForm}>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="4">
                    Name
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      name="name"
                      placeholder="Enter your name"
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Save
                </Button>{" "}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TestPage;
