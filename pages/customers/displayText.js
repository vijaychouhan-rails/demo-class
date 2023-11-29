import React, { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FontSizeContext } from "./fontSizeContext";

function DisplayText(props) {
    const {text} = props;
    
    const fontSize = useContext(FontSizeContext);

  return (
    <div style={{fontSize: (fontSize || 14) + 'px'}}>{text}</div>
  );
}

export default DisplayText;
