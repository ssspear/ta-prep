import React from "react";

function ListItems(props) {
  const todosFromApi = props.todos;
  // console.log(todosFromApi);
  const todoItems = todosFromApi.map(todo => (
    <li key={todo.id}>{todo.title}</li>
  ));
  return <ul>{todoItems}</ul>;
}

export default ListItems;
