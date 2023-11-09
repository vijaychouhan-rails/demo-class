import React from "react";
// import Layout from "../../components/Layout";
// import Setting from "./setting";
import User from "./user";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";

//Component
function Home() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296990_640.png"
          width={200}
          height={200}
        />
        <Card.Body>
          <Card.Title>User Name</Card.Title>
          <Card.Title>1234567890</Card.Title>
          <Card.Title>1234567890</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div>
            <Badge bg="secondary" className="me-2">
              New
            </Badge>
            <Badge bg="secondary" className="ms-2">
              New111
            </Badge>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Home;
