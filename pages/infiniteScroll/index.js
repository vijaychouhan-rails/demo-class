import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Image, Spinner, Table, Button } from "react-bootstrap";

function InfinteScroll() {
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

  const handleScroll = () => {
    // if (typeof document !== "undefined") {
    const scrolled = window.innerHeight + document.documentElement.scrollTop;
    const totalHeight = document.documentElement.offsetHeight;
    console.log(
      "===isLoading, metaData.nextPage",
      isLoading,
      metaData.nextPage
    );
    // Check if the user is near the bottom of the page
    if (!isLoading && scrolled >= totalHeight - 1) {
      console.log("End of page reached!");
      if (metaData.nextPage !== null) {
        loadData(metaData.nextPage);
      }
      // Your logic for reaching the end of the page
    }
    // }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  useEffect(() => {
    loadData(metaData.nextPage);
  }, []);

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

        {metaData.nextPage !== null && isLoading && (
          <Button variant="primary" disabled className="mb-5">
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        )}
      </Col>
    </center>
  );
}

export default InfinteScroll;
