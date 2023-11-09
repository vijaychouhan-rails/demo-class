import React from "react";

function User(props) {
  if (props.isPassed) {
    return (
      <div>
        <span>Congratualation {props.name}, we are great</span>
      </div>
    );
  }
  return <div>Try Next time! {props.name}</div>;
}

export default User;
