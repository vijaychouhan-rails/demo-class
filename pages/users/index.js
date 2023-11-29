import React, { useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import {Formik} from 'formik';
import * as yup from 'yup';

import UserList from "./userList";

const initialFormValues = {name: '', mobileNo: '', address: ''};

function User() {
  const [users, setUsers] = useState([]);
  const [sumResult, setSumResult] = useState();
  const formRef = useRef();
  
  // API CALLING
  const callApi = () => {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve({success: true})
      }, 2000)  
    })
    // return myPromise;
  }

  const handleSubmitForm = (values, actions) => {
    // const current = formRef.current;
    // debugger;
    // console.log("===formRef====", formRef.current);
    callApi().then((res) => {
      if (res.success) {
        setUsers([...users, values]); //Set users
        actions.resetForm();
      }
    })

    // actions.resetForm();
    // //   formRef.current.reset(); //Reset the form

    // setUsers([...users, values]); //Set users
    //   // setFormData(initialFormValues);
    //   setFormData({ ...initialFormValues }); // state reset
    // }
  };

  // const myPromise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     const randomNumber = Math.random();
      
  //     if (randomNumber > 0.5) {
  //       resolve('Operation succeeded: ' + randomNumber);
  //     } else {
  //       reject('Operation failed: ' + randomNumber);
  //     }
  //   }, 1000);
  // });
  
  // // Handling the promise
  // myPromise.then((result) => {
  //   console.log(result); // Operation succeeded: [randomNumber]
  // }).catch((error) => {
  //   console.error(error); // Operation failed: [randomNumber]
  // });
  
  const validationSchema = yup.object().shape({
    name: yup.string().required().min(2).max(20),
  });

  // const sum = (num1, num2) => {
  //   let r = null;


  //   let myPromise = new Promise(function(resolve, reject) {
      
  //     setTimeout(() => {
  //       console.log("===5 second is over===");
  //       r = (num1 + num2)
        
  //       if (r < 0) {
  //         reject("Sum can not be negative");
  //       }
  //       resolve(r);
  //     }, 2000);

  //   });
    
    

  //   return myPromise;
  // }

  // const performOperation = () => {
  //   sum(10, 20).then((res) => {
  //     console.log("====result=====", res);
  //     setSumResult(res);
  //   })
  // }

  // const performFailOperation = () => {
  //   sum(10, -20).then((res) => {
  //     console.log("====result=====", res);
  //     setSumResult(res);
  //   }).catch((err) => {
  //     alert(err);
  //   })
  // }

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs lg="6">
          Name: {formRef.current?.values?.name}
          <UserList users={users} setUsers={setUsers} />
        </Col>
        {/* <h3>{sumResult}</h3>
        <button onClick={performOperation}>Sum</button>
        <button onClick={performFailOperation}>Sum Failed</button> */}

        <Col xs lg="6">
          <Card className="">
            <Card.Header>User Detail Form</Card.Header>
            <Card.Body>Form here</Card.Body>
            <Formik
              innerRef={formRef}
              validationSchema={validationSchema}
              onSubmit={handleSubmitForm}
              initialValues={initialFormValues}
            >
              {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => {
                console.log("===isSubmitting===", isSubmitting);
                return(
                  <Form className="p-2" onSubmit={handleSubmit}>
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
                          value={values.name}
                          placeholder="Enter your name"
                          onChange={handleChange}
                          isInvalid={
                            touched.name && !!errors.name
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
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
                          value={values.mobileNo}
                          placeholder="Enter mobile number"
                          onChange={handleChange}
                          isInvalid={
                            touched.mobileNo && !!errors.mobileNo
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.mobileNo}
                        </Form.Control.Feedback>
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
                          value={values.address}
                          placeholder="Enter Address"
                          onChange={handleChange}
                          isInvalid={
                            touched.address && !!errors.address
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.address}
                        </Form.Control.Feedback>
                      </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Please wait...' : 'Save'}
                    </Button>{" "}
                  </Form>
              )}}
            </Formik>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default User;
