import React, { useState } from "react";
import { Col, Image, Pagination, Table } from "react-bootstrap";
import { times, map } from "lodash";
import axios from "axios";

function Dec6() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [metaData, setMetaData] = useState({
    totalPages: 0,
    currentPage: 1,
    nextPage: 1,
  });

  const loadData = (page) => {
    setIsLoading(true);
    // Make a request for a user with a given ID
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then(function (response) {
        // handle success
        const { data, total_pages: totalPages, page } = response.data;

        setUsers([...users, ...response.data.data]);

        setMetaData({
          totalPages: totalPages,
          currentPage: page,
          nextPage: page === totalPages ? null : page + 1,
        });
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
        // console.log("=====error=====", error);
      })
      .finally(function () {
        setIsLoading(false);
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

        {/* <Pagination>
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
        </Pagination> */}
      </Col>
    </center>
  );
}

export default Dec6;
