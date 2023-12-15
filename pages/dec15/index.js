import React, { useState, useEffect } from "react";
import { Col, Image, Pagination, Table } from "react-bootstrap";
import { times, map } from "lodash";
import axios from "axios";
import Link from "next/link";
import { useLoadGetData } from "@/hooks/useLoadGetData";

function Dec15() {
  let page = 1;
  const { data, otherData } = useLoadGetData({
    urlPath: `/api/users?page=${page}`,
    callApi: true,
  });

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [metaData, setMetaData] = useState({
    totalPages: 0,
    currentPage: 1,
    nextPage: 1,
  });

  //   useEffect(() => {
  //     if (!!metaData.nextPage) {
  //       loadData(metaData.nextPage);
  //     }
  //   }, [metaData.nextPage]);

  // It's a way to declare a function in JavaScript
  // that handles asynchronous operations
  // When a function is declared with the async keyword,
  // it means it can contain asynchronous code and will always return a promise.

  //   const loadData = (page) => {
  //     setIsLoading(true);
  //     // Make a request for a user with a given ID
  //     axios
  //       .get(`https://reqres.in/api/users?page=${page}`)
  //       .then(function (response) {
  //         // handle success
  //         const { data, total_pages: totalPages, page } = response.data;

  //         setUsers([...users, ...response.data.data]);

  //         setMetaData({
  //           totalPages: totalPages,
  //           currentPage: page,
  //           nextPage: page === totalPages ? null : page + 1,
  //         });
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         alert(error.message);
  //         // console.log("=====error=====", error);
  //       })
  //       .finally(function () {
  //         setIsLoading(false);
  //       });
  //   };

  console.log("==data==", data);
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
            {data.map((user, uIndex) => {
              return (
                <tr key={`userId-${user.id}`}>
                  <td>
                    <Link href={`/dec15_user_profile/${user.id}/show`}>
                      {user.id}
                    </Link>
                  </td>
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
          // <button
          //   onClick={() => loadData(metaData.nextPage)}
          //   disabled={isLoading}
          // >
          //   {isLoading ? "Loading..." : "Load More Data"}
          // </button>
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

export default Dec15;
