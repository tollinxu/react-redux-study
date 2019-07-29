import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  componentDidMount(){
    this.props.fetchTodoList()
  }
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map(todo => {
          return (
            <Todo
              onItemDbClick={id =>this.props.ToggleTodoAction(id)}
              key={todo.id}
              {...todo}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
