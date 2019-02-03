import React from "react";

function Input(props) {
  return (
    <form>
      <label>
        Todos:
        <input type="text" value={props.text} onChange={props.handleChange} />
      </label>
      <button onClick={props.handleSubmit}>Todos</button>
    </form>
  );
}

export default Input;
