import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import DisplayText from './displayText';

function Profile(props) {
    const {fontSize} = props;
  return (
    <DisplayText text="this is first page" />
  );
}

export default Profile;
