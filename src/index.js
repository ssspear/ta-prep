import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/listContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  render() {
    return (
      <div>
        I'm so lonely without anything to complete
        <Container />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
