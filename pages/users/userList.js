import React from "react";
import { Col, Row } from "react-bootstrap";
import User from "./user";

function UserList(props) {
  const { users, setUsers } = props;

  const handleDeleteUser = (index) => {
    const newUsers = users.filter((user, uIndex) => {
      return uIndex !== index;
    });

    setUsers(newUsers);
  };

  function userNotExist() {
    if (users.length === 0) {
      return <div>User not exist</div>;
    }
  }

  return (
    <div>
      <Row>
        <Col>
          <h4>Name</h4>
        </Col>
        <Col>
          <h4>Mobile</h4>
        </Col>
        <Col>#</Col>
      </Row>
      {userNotExist()}
      {users.map((user, index) => {
        return (
          <User
            index={index}
            key={`user-${index}`}
            name={user.name}
            mobileNo={user.mobileNo}
            handleDeleteUser={handleDeleteUser}
          />
        );
      })}
    </div>
  );
}

export default UserList;
