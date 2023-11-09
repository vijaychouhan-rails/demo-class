import React from "react";
import { Button, Card, Badge } from "react-bootstrap";
import UserItems from "./userItems";

function UserInfo(props) {
  const { user } = props;
  return (
    <Card style={{ width: "18rem" }} className="ms-4">
      <Card.Img
        variant="top"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        height={200}
        width={100}
      />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.mobileNo}</Card.Text>
        <UserItems items={user.items} />
      </Card.Body>
    </Card>
  );
}

export default UserInfo;
