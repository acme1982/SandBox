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
      if (log.isLogedIn) {
        log.isLogedIn = false;
      } else {
        log.isLogedIn = true;
      }
      return log;
    });
  }

  render() {
    let textToDisp;
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

        <button onClick={this.handleClick}>
          {this.state.isLogedIn
            ? (textToDisp = "Log Out")
            : (textToDisp = "Log in")}
        </button>
      </div>
    );
  }
}
export default App;
