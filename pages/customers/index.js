import React, { useState } from "react";

import Profile from './profile';
import Posts from './posts';
import FontSize from "./fontSize";
import { FontSizeContext } from "./fontSizeContext";

function Customers() {
    const [fontSize, setFontSize] = useState();
    // const [inputValue, setInputValue] = useState('');

    // const handleChange = (event) => {
    //     setInputValue(event.target.value);
    // }

    console.log("=====fontSize====", fontSize);

  return (
    <center>
        <FontSize handleFontSize={setFontSize}/>
        <FontSizeContext.Provider value={fontSize}>
            <Profile />
            <Posts />
        </FontSizeContext.Provider>
    </center>
  );
}

export default Customers;
