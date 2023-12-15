import React, { useState, useEffect } from "react";
import { Col, Image, Table } from "react-bootstrap";
import axios from "axios";

function Dec14() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [metaData, setMetaData] = useState({
    totalPages: 0,
    currentPage: 1,
    nextPage: 1,
  });

  useEffect(() => {
    if (!!metaData.nextPage) {
      loadData(metaData.nextPage);
    }
  }, [metaData.nextPage]);

  // It's a way to declare a function in JavaScript
  // that handles asynchronous operations
  // When a function is declared with the async keyword,
  // it means it can contain asynchronous code and will always return a promise.

  const loadData = async (nextPage) => {
    setIsLoading(true);
    // Make a request for a user with a given ID
    const response = await axios.get(
      `https://reqres.in/api/users?page=${nextPage}&delay=${5}`
    );
    setIsLoading(false);
    console.log("====response=====", response);
    const { data, total_pages: totalPages, page } = response.data;
    setUsers([...users, ...data]);
    setMetaData({
      totalPages: totalPages,
      currentPage: page,
      nextPage: page === totalPages ? null : page + 1,
    });
  };

  return (
    <center>
      <Col className="col-md-6 mt-2">
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

        {metaData.nextPage !== null && (
          <button
            onClick={() => loadData(metaData.nextPage)}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Load More Data"}
          </button>
        )}
      </Col>
    </center>
  );
}

export default Dec14;
