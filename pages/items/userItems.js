import React from "react";
import { Badge } from "react-bootstrap";

const UserItems = (props) => {
  const { items } = props;
  return items.map((item) => {
    return (
      <Badge bg="secondary" key={`item-${item.id}`}>
        {item.productName}
      </Badge>
    );
  });
};

export default UserItems;
