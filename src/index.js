import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/listContainer";
import axios from "axios";
import Input from "./components/input";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/todos"
    })
      .then(response => {
        // console.log(response.data);
        this.setState({
          todos: response.data.slice(0, 26)
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange(event) {
    this.setState({
      text: event.target.text
    });
    // console.log(event);
  }

  handleSubmit(event) {
    // console.log(event);
    event.preventDefault();
    // this.setState({
    //   todos: this.state.todos.concat([this.state.text])
    // });
    axios
      .get("/todos")
      .then(response => {
        console.log("You did it!", response);
      })
      .catch(error => {
        console.log("Error in handle submit get reqest", error);
      });
  }

  render() {
    return (
      <div>
        <h2>I'm so lonely without anything to complete</h2>
        <Input
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Container todos={this.state.todos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
