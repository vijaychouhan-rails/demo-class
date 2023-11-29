import React from "react";
import { Button, Col, Row } from "react-bootstrap";

function User(props) {
  const { name, mobileNo, handleDeleteUser, index } = props;
    
  // Handle delete request
  const handleDelete = () => {
    let bool = confirm(`Are you sure want to delete user: #${name}`);
    if (bool) {
      handleDeleteUser(index);
      alert("User has been deleted");
    }
  };

  return (
    <Row className="mt-3">
      <Col>{name}</Col>
      <Col>{mobileNo}</Col>
      <Col>
        <Button onClick={handleDelete}>Delete</Button>
        <Button>Edit</Button>
      </Col>
    </Row>
  );
}

export default User;
