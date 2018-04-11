import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import ClearButton from './ClearButton';

let removeCompletedItems = () => {
  //remove the completed items
}

export default class TodoListFooter extends Component {
  render() {
    return (
      <div style={styles.footer}>
        {(this.props.todoCount) > 1 ? this.props.todoCount + ' Todos' : this.props.todoCount + ' Todo'}
        <ClearButton removeCompleted={removeCompletedItems}/>
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
    alignItems: 'center',
    padding: '0 20px'
  }
}