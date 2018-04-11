import React, { Component } from "react";
import ReactDOM from "react-dom";
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export default class TodoList extends Component {
  render() {
    return (
      <ul style={styles.list}>
        {this.props.todoListItems.map((item) => {
          return <TodoItem key={item.id} item={item}/>
        })}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todoListItems: PropTypes.array.isRequired
}

const styles = {
  list: {
    padding: '0'
  }
}