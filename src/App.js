import React, { Component } from "react";
import ToDoItem from "./todoitem";
import TodoItems from "./TodoItems";
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: TodoItems
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("Clicked");
  }
  render() {
    const todoList = this.state.todos.map(item => (
      <ToDoItem key={item.id} item={item} />
    ));
    return (
      <div>
        <h1>This is ToDO list</h1>
        {todoList}
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
export default App;
