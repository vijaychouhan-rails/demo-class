import React from "react";
// import Layout from "../../components/Layout";
// import Setting from "./setting";
import User from "./user";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { resolve } from "styled-jsx/css";
import { reject } from "lodash";

//Component
function Home() {
  // const example = async () => {
  //   return new Promise((resolve, reject) => {
  //     resolve("1234");
  //   });
  // };

  // const example = async () => {
  //   return 2000;
  // };

  // const example = () => {
  //   return new Promise((resolve, reject) => {
  //     resolve(22222);
  //   });
  // };

  // Regular promise function
  // const example1 = () => {
  //   let promise = new Promise((resolve, reject) => {
  //     setTimeout(() => resolve("done!"), 3000);
  //   });
  //   return promise;
  // };

  // Convert Regular promise to async function
  // async before a function means function always returns a promise.
  // Other values are wrapped in a resolved promise automatically.

  const example1 = async () => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 3000);
    });
    return promise;
  };

  const example2 = async () => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("example 2"), 2000);
    });
    console.log("===1====");
    let op = await promise; // wait until the promise resolves (*)
    console.log("===2====");
    return op;
  };

  const example3 = () => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("example 3"), 2000);
    });
    return promise;
  };

  const example4 = () => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => reject("example 4"), 2000);
    });
    return promise;
  };

  const example5 = () => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("example 5"), 2000);
    });
    return promise;
  };

  const handleClick = async () => {
    try {
      let res1 = await example3();
      console.log(res1);
      let res2 = await example4();
      let res3 = await example5();
      console.log(res3);
    } catch (e) {
      console.log("error is==", e);
    }
  };

  // const handleClick = () => {
  //   example3().then((res) => {
  //     console.log(res);
  //     example4().then((res1) => {
  //       console.log(res1);
  //       example5().then((res2) => {
  //         console.log(res2);
  //       });
  //     });
  //   });
  //   // example2().then((res) => {
  //   //   console.log("====res====", res);
  //   // });

  //   // const res = await example2();
  //   // console.log("====res====", res);
  // };

  // const handleClick1 = async () => {
  //   let op = await example2();
  //   console.log("======op======", op);
  // };

  return (
    <>
      <Button onClick={handleClick}>Example1</Button>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.pixabay.com/photo/2014/03/25/16/24/female-296990_640.png"
          width={200}
          height={200}
        />
        <Card.Body>
          <Link href="/dec11">Dec11 Page</Link>
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
