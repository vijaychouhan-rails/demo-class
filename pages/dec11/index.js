import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";

function Dec11() {
  // It will run everytime when page re-render
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);

  const [number, setNumber] = useState(1);

  //   useEffect(() => {
  //     console.log("== SUM==", count);
  //     setSum(sum + count);
  //   }, [count]);

  //   useEffect(() => {
  //     console.log("== Number==", number);
  //   }, [number]);

  //   useEffect(() => {
  //     console.log("====no dependency=====");
  //   }, []);

  useEffect(() => {
    function handleScroll(e) {
      console.log("=====scrolling====");
      console.log(window.scrollX, window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    // return () => console.log("====unmounting===================");
  }, []);

  //   const handleCount = () => {
  //     let nextCount = count + 1;
  //     setCount(nextCount);
  //   };

  //   const handleNumber = () => {
  //     setNumber(number + 1);
  //   };

  return (
    <div>
      {/* <p>{count}</p>
      <p>
        Sum: {sum}
        <Button onClick={handleCount}>Count</Button>
      </p>
      <p>
        Number: {sum}
        <Button onClick={handleNumber}>Number</Button>
      </p> */}
      <Link href="/home">Home Page</Link>

      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
    </div>
  );
}

export default Dec11;
