import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Dec13_1() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  //   const [sum, setSum] = useState(number1 + number2);

  //   const nextNum1 = Math.ceil(Math.random() * 10);
  //   const nextNum2 = Math.ceil(Math.random() * 10);

  const handleNumber1 = (num) => {
    setNumber1(Math.ceil(Math.random() * 10));
  };

  const handleNumber2 = (num) => {
    setNumber2(Math.ceil(Math.random() * 10));
  };

  //   useEffect(() => {
  //     setSum(number1 + number2);
  //   }, [number1, number2]);

  const sum = number1 + number2;

  console.log("===number1, number2, sum===", number1, number2, sum);

  return (
    <div>
      <p>Number1 : {number1}</p>
      <p>Number2 : {number2}</p>
      <p>Sum: {sum}</p>
      <Button onClick={handleNumber1}>Number 1</Button>

      <Button onClick={handleNumber2}>Number 2</Button>
    </div>
  );
}

export default Dec13_1;
