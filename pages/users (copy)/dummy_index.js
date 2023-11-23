import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function User() {
  const [formData, setFormData] = useState({});

  const handleSubmitForm = () => {
    console.log("====sunmit the form===");
  };

  //   const handleChangeName = (e) => {
  //     // console.log("=====name===", e.target.value);
  //     setFormData({
  //       ...formData,
  //       name: e.target.value,
  //     });
  //   };

  //   const handleChangeMobileNo = (e) => {
  //     setFormData({
  //       ...formData,
  //       mobileNo: e.target.value,
  //     });
  //   };

  const handleChange = (keyName, value) => {
    setFormData({
      ...formData,
      [keyName]: value,
    });
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs lg="6">
          List will be here
        </Col>

        <Col xs lg="6">
          <Card className="">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="2">
                    Email
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control readOnly defaultValue="email@example.com" />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2">
                    Password
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="password" placeholder="Password" />
                  </Col>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default User;
