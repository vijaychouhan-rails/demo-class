import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import DisplayText from './displayText';

function Posts(props) {
  return (
    <div style={{marginTop: '50px'}}>
        <p>Posts</p>
        <DisplayText text="This is first post"/>
    </div>
  );
}

export default Posts;

