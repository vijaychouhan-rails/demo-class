import React, { useState } from "react";
import { Button } from "react-bootstrap";

function MyCounter(props) {
  const { show } = props;
  const [counter, setCounter] = useState(0);
  //   const [show, setShow] = useState(false);

  function increaseCountValue() {
    setCounter(counter + 1);
  }

  function isEventOrOdd() {
    if (counter % 2 == 0) {
      return "Even";
    }
    return "Odd";
  }

  //   function handleShowAndHide() {
  //     setShow(!show);
  //   }

  return (
    <center>
      <h1>
        <p>Counter value: {counter}</p>
      </h1>
      {show && <p>Is Even Number ? {isEventOrOdd()}</p>}
      <p>
        <Button onClick={increaseCountValue}>Click Me +</Button>
      </p>
    </center>
  );
}

export default MyCounter;
