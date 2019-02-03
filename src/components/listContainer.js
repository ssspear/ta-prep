import React from "react";
import ListItems from "./listItem";

function Container(props) {
  return (
    <div>
      <ListItems todos={props.todos} />
    </div>
  );
}

export default Container;
