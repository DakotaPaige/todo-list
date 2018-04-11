import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class TodoInput extends Component {
  render() {
    return (
      <div style={styles.toDoInput}>
        <input type="text" placeholder="Feed the dog" style={styles.input} name="todo"></input>
        <p style={styles.inputText}>(press enter to add)</p>
      </div>
    );
  }
}

const styles = {
  toDoInput: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: 'lightgrey'
  },
  input: {
    backgroundColor: 'transparent',
    border: '0',
    borderBottom: '1px solid grey',
    boxShadow: 'none'
  },
  inputText: {
    color: 'grey'
  }
}