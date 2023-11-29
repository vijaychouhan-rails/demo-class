import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import DisplayText from './displayText';


function FontSize(props) {
    const [inputValue, setInputValue] = useState('');

    const {handleFontSize} = props

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = () => {
        handleFontSize(inputValue);
    }

    console.log("=====inout value===", inputValue);

  return (
    <div style={{marginTop: '50px'}}>
        <input name="fontSize" placeholder="Enter the font size" onChange={handleChange}/>
        <button type="button" onClick={handleSubmit}>Change Font Size</button>
    </div>
  );
}

export default FontSize;
