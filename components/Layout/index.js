import React from "react";

function Layout(props) {
  console.log("====props.children====", props.children);
  const { title = "Missing title || " } = props;
  return (
    <div>
      <div style={{ backgroundColor: "yellow" }}>
        <span> Title: {title} </span>
        <span> Home </span>
        <span> User </span>
        <span> Setting </span>
      </div>

      <div>{props.children}</div>

      <div>
        <span>Footer</span>
        <span>About us</span>
        <span>Contact us</span>
      </div>
    </div>
  );
}

export default Layout;
