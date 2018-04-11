import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
  render() {
    return (
      <li style={styles.listItem}>
        <span>{this.props.item}</span>
        <button style={styles.todoCheck}>.</button>
        <button style={styles.trashButton}>Trash</button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  items: PropTypes.string.isRequired
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
    borderRadius: '50%',
    margin: '0px 10px'
  },
  trashButton: {
    backgroundColor: 'transparent',
    border: '2px solid mediumpurple',
    borderRadius: '3px',
    color: 'mediumpurple',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
}
