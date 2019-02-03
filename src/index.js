import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/listContainer";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  componentDidMount() {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/todos"
    }).then(response => {
      // console.log(response.data);
      this.setState({
        todos: response.data
      });
    });
  }
  render() {
    return (
      <div>
        I'm so lonely without anything to complete
        <Container todos={this.state.todos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
