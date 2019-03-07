import React, { Component } from "react";
import ToDoItem from "./todoitem";
import TodoItems from "./TodoItems";
import Header from "./Header";
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: TodoItems,
      isLoading: true,
      isLogedIn: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.selected = !todo.selected;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1500);
  }
  handleClick() {
    this.setState(log => {
      return {
        isLogedIn: !log.isLogedIn
      };
    });
  }

  render() {
    let textToDisp = this.state.isLogedIn ? "Log Out" : "Log in";
    let textToDisp1 = this.state.isLogedIn
      ? "You are logged in."
      : "You are logged out.";
    const todoList = this.state.todos.map(item => (
      <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return (
      <div>
        {this.state.isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Header isLoading={this.isLoading} />
        )}
        <h1>This is ToDO list</h1>
        {todoList}

        <button onClick={this.handleClick}>{textToDisp}</button>
        <h3>{textToDisp1}</h3>
      </div>
    );
  }
}
export default App;
