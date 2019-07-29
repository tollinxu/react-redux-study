import React, { Component } from "react";

class Footer extends Component {
  render() {
    const { filter } = this.props;
    console.log(filter);
    return (
      <div>
        <span>Show:</span>
        <button
          onClick={() => this.props.Change_filter("all")}
          disabled={filter === "all"}
        >
          All
        </button>
        <button
          onClick={() => this.props.Change_filter("completed")}
          disabled={filter === "completed"}
        >
          Completed
        </button>
        <button
          onClick={() => this.props.Change_filter("active")}
          disabled={filter === "active"}
        >
          Active
        </button>
      </div>
    );
  }
}

export default Footer;
