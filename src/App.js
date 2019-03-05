import React, { Component } from "react";
import ToDoItem from "./todoitem";
import TodoItems from "./TodoItems";
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: TodoItems,
      selected: true
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    console.log("Changed", id);
  }
  render() {
    const todoList = this.state.todos.map(item => (
      <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return (
      <div>
        <h1>This is ToDO list</h1>
        {todoList}
      </div>
    );
  }
}
export default App;
