import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class TodoItem extends Component {
  render() {
    return (
      <li style={styles.listItem}>
        <span>{this.props.item}</span>
        <button style={styles.todoCheck}>.</button>
        <button>Trash</button>
      </li>
    );
  }
}

const styles = {
  listItem: {
    listStyleType: 'none',
    textAlign: 'left',
    borderBottom: '1px solid grey',
    padding: '10px 20px'
  },
  todoCheck: {
    border: '2px solid grey',
    borderRadius: '50%'
  }
}
