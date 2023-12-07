import React, { useState } from "react";
import { Col, Image, Pagination, Table } from "react-bootstrap";
import { times, map } from "lodash";

function Dec6() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [metaData, setMetaData] = useState({ totalPages: 0, currentPage: 1 });

  const loadData = (page) => {
    setIsLoading(true);
    fetch(`https://reqres.in/api/users?page=${page}`)
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
        setMetaData({
          totalPages: resData.total_pages,
          currentPage: resData.page,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  };

  return (
    <center>
      <Col className="col-md-6 mt-2">
        <button
          onClick={() => loadData(metaData.currentPage)}
          disabled={isLoading}
        >
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
        <Pagination>
          {map(times(metaData.totalPages), (pn) => {
            let page = pn + 1;
            return (
              <Pagination.Item
                onClick={() => loadData(page)}
                active={page === metaData.currentPage}
                key={`pn-${pn}`}
              >
                {page}
              </Pagination.Item>
            );
          })}
        </Pagination>
      </Col>
    </center>
  );
}

export default Dec6;
