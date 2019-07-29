import React, { Component } from "react";

class AddTodo extends Component {
  render() {
    const { text } = this.props;
    return (
      <div>
        <input  value={text} onChange={e=> this.props.Add_TodoText(e.target.value)}/>
        <button onClick={()=>this.props.AddTodoAction(text)}>Add Item</button>
      </div>
    );
  }
}

export default AddTodo;
