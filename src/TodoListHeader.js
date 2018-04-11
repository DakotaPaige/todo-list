import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class TodoListHeader extends Component {
  render() {
    return (
      <h1 style={styles.header}>So Much To Do!</h1>
    );
  }
}

const styles = {
  header: {
    backgroundColor: 'violet',
    padding: '10px 0',
    color: 'white',
    fontWeight: 'normal'
  }
}