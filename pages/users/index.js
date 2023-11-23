import React, { useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import UserList from "./userList";

const initialFormValues = {};

function User() {
  const [formData, setFormData] = useState(initialFormValues);
  const [users, setUsers] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const checkFormValidation = () => {
    const errors = {};
    if (formData.name == "" || formData.name == null) {
      errors.name = "Name is required";
    } else if (formData.name.length <= 2) {
      errors.name = "Enter at-least 3 or more characters";
    }
    return errors;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault(); // Stop to reload the page.

    const errors = checkFormValidation();

    setFormErrors(errors);

    if (Object.keys(errors).length == 0) {
      formRef.current.reset(); //Reset the form

      setUsers([...users, formData]); //Set users
      // setFormData(initialFormValues);
      setFormData({ ...initialFormValues }); // state reset
    }
  };

  console.log(
    "===formErrors.name===",
    !!formErrors.name,
    formErrors.name !== undefined && !!formErrors.name
  );
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs lg="6">
          Address: {formData.address}
          <UserList users={users} setUsers={setUsers} />
        </Col>

        <Col xs lg="6">
          <Card className="">
            <Card.Header>User Detail Form</Card.Header>
            <Card.Body>Form here</Card.Body>
            <Form className="p-2" onSubmit={handleSubmitForm} ref={formRef}>
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
                    isInvalid={
                      formErrors.name !== undefined && !!formErrors.name
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.name}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4">
                  Mobile Number
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    name="mobileNo"
                    placeholder="Enter your mobile"
                    onChange={handleChange}
                    // isInvalid={true}
                  />
                  {/* <Form.Control.Feedback type="invalid">
                    Mobile Number is invalid
                  </Form.Control.Feedback> */}
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="4">
                  Address
                </Form.Label>
                <Col sm="8">
                  <Form.Control
                    name="address"
                    placeholder="Enter your address"
                    onChange={handleChange}
                    // isInvalid={true}
                  />
                  {/* <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback> */}
                </Col>
              </Form.Group>
              <Button variant="primary" type="submit">
                Save
              </Button>{" "}
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default User;
