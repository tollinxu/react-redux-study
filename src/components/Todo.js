import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { text, completedStatus, id } = this.props;
    return (
      <li
        onDoubleClick={() => this.props.onItemDbClick(id)}
        style={{
          textDecoration: completedStatus ? "line-through" : "none"
        }}
      >
        {text}
      </li>
    );
  }
}

export default Todo;
