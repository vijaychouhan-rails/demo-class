import React, { useState } from "react";

function Items() {
  console.log("*************************************************");
  const [count, setCount] = useState(0); //Hook
  const [show, setShow] = useState(true); //Hook
  const [firstName, setFirstName] = useState(""); //Hook

  let next = 0;

  function handleClick() {
    setCount(count + 1);
    next += 1;
    console.log("====1) inside handle click===", next);
  }

  function handleShow() {
    setShow(!show);
  }

  function handleOnChangeFirstName(e) {
    console.log("=====first name===", e.target.value);
    setFirstName(e.target.value);
  }

  return (
    <center>
      <div>
        <h2>
          Count: {count} {next}
        </h2>
      </div>

      {show && (
        <div>
          <h2>Even: {count % 2 == 0 ? "True" : "False"}</h2>
        </div>
      )}

      <form>
        <input
          placeholder="First name"
          value={firstName}
          onChange={handleOnChangeFirstName}
        />
      </form>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleShow}>{show ? "Hide" : "Show"}</button>
      <input type="submit" value="Submit"></input>
    </center>
  );
}

export default Items;
