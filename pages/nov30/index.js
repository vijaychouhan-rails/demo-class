import React, { useRef, useState } from "react";
import Display from "./display";

function Nov30() {
  //   const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const iRef = useRef();
  const bRef = useRef();

  let name = "new test";
  const nameRef = useRef("test");

  const handleButton = () => {
    // console.log("===ref===", iRef.current.value);
    // iRef.current.focus();
    // debugger;
    // iRef.current.focus();
    // bRef.current.innerHTML = iRef.current.value;
    // setCount(count + 1);
    // console.log("======value ======", iRef);
    bRef.current.focusOnInput();
    bRef.current.myAlert();
  };

  return (
    <div>
      Nov30
      <p>Ref value: {nameRef.current}</p>
      <p>Regular var name: {name}</p>
      <Display ref={bRef} />
      <button type="button" onClick={handleButton}>
        Focus on Input
      </button>
    </div>
  );
}

export default Nov30;
