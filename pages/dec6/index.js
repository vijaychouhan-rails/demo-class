import React, { useState } from "react";
import { Col, Image, Table } from "react-bootstrap";

function Dec6() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = () => {
    setIsLoading(true);
    fetch("https://reqres.in/api/users?page=2&delay=7")
      .then((response) => {
        setIsLoading(false);
        console.log("=====res==", response);
        if (!response.ok) {
          // response.status.code
          console.log("====error=========================");
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((resData) => {
        console.log("====success=========================", resData);
        setUsers(resData.data); // Assuming the response has a 'data' property containing the user array
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  };

  return (
    <center>
      <Col className="col-md-6 mt-2">
        <button onClick={loadData} disabled={isLoading}>
          {isLoading ? "Loading..." : "Load Data"}
        </button>

        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, uIndex) => {
              return (
                <tr key={`userId-${user.id}`}>
                  <td>{user.id}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Image src={user.avatar} roundedCircle alt="user" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
    </center>
  );
}

export default Dec6;
