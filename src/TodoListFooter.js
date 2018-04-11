import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

export default class TodoListFooter extends Component {
  render() {
    return (
      <div style={styles.footer}>
        {(this.props.todoCount) > 1 ? this.props.todoCount + ' Todos' : this.props.todoCount + ' Todo'}
        <button>Clear Completed</button>
      </div>
    );
  }
}

TodoListFooter.propTypes = {
  todoCount: PropTypes.number.isRequired
}

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 20px'
  }
}