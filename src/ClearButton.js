import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
 
export default class ClearButton extends Component {
  render() {
    const removeCompleted = false;

    return (
      <button style={styles.button}>Clear Completed</button>
    )
  }
}

const styles = {
  button: {
    backgroundColor: 'transparent',
    border: '2px solid mediumpurple',
    color: 'mediumpurple',
    borderRadius: '3px',
    padding: '5px 10px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '14px'

  }
}