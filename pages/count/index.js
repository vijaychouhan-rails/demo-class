import React, { useState } from "react";
import { Button } from "react-bootstrap";
import MyCounter from "./myCounter";

function Count() {
  const [show, setShow] = useState(true);

  function handleShowAndHide() {
    setShow(!show);
  }

  return (
    <center>
      <MyCounter show={show} />
      <MyCounter show={show} />
      <Button onClick={handleShowAndHide}>{show ? "Hide" : "Show"}</Button>
    </center>
  );
}

export default Count;
