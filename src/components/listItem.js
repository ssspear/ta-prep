import React from "react";

function ListItems(props) {
  // console.log(props.todos);
  const todosFromApi = props.todos;
  const todoItems = todosFromApi.map(todo => (
    <li key={todo.id}>{todo.title}</li>
  ));
  return <ul>{todoItems}</ul>;
}

export default ListItems;
