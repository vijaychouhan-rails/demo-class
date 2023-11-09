import React from "react";
// or less ideally
import { Button, Card } from "react-bootstrap";
// import Card from 'react-bootstrap/Card';

function UserProfile(props) {
  return (
    <div>
      <ul>
        <li>Name: {props.name} </li>
        <li>Address: {props.address}</li>
      </ul>
      <div>
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>
        <div>{props.children}</div>
      </div>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="images/dhaara.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserProfile;
