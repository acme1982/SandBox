import React, { Component } from "react";
import ToDoItem from "./todoitem";
import TodoItems from "./TodoItems";
import Header from "./Header";
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: TodoItems,
      isLoading: true
    };
    this.handleChange = this.handleChange.bind(this);
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

  render() {
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
      </div>
    );
  }
}
export default App;
