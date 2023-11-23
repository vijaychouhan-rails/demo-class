import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import MyCounter from "./myCounter";

function Count() {
  const [user, setUser] = useState({
    name: "abcd",
    address: "Indore",
    age: 30,
  });

  const [numberTable, setNumberTable] = useState([]);

  const increaseAge = () => {
    // const updatedUser = {
    //   ...user,
    //   age: user.age + 1,
    // };
    // setUser(updatedUser);
  };

  const increment = () => {
    let newValue = numberTable.length == 0 ? 0 : numberTable[0];
    // let newValue = numberTable.at(-1) ?? 0;
    // console.log("====newValue===", newValue);
    // numberTable.push(newValue + 1);
    // setNumberTable([...numberTable, newValue + 1]);

    setNumberTable([newValue + 1, ...numberTable]);
  };

  const handleRemoveItem = (index) => {
    console.log("====index===", index);
    const newNumberTable = numberTable.filter((ntValue, ntIndex) => {
      return ntIndex !== index;
    });

    setNumberTable([...newNumberTable]);
  };

  const handleEdit = (index) => {
    const updatedValue = +prompt("Please enter new value", numberTable[index]);
    const newArray = numberTable.map((ntValue, ntIndex) => {
      if (ntIndex === index) {
        return updatedValue;
      }
      return ntValue;
    });

    setNumberTable(newArray);
    console.log("===newArray===", newArray);
  };

  const sorting = () => {
    const newArray = [...numberTable].reverse();
    setNumberTable(newArray);
  };

  return (
    <center style={{ marginTop: "50px" }}>
      <ul>
        {numberTable.map((num, index) => {
          return (
            <li key={index} style={{ marginTop: "20px" }}>
              <span style={{ marginRight: "20px" }}>{num}</span>
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </li>
          );
        })}
        <div style={{ marginTop: "20px" }}>
          <button onClick={increment}>Increment</button>
        </div>

        <div style={{ marginTop: "20px" }}>
          <button onClick={sorting}>Sort</button>
        </div>
      </ul>
    </center>
  );
}

export default Count;
