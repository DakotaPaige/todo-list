import React, { Component } from "react";
import ReactDOM from "react-dom";
import TodoListHeader from './TodoListHeader';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import TodoListFooter from './TodoListFooter';

const styles = {
  backgroundColor: 'white',
  width: '100vw',
  height: '100vh',
  margin: '0',
  textAlign: 'center',
  width: '400px',
  margin: '0 auto',
  header: {
    backgroundColor: 'violet',
    padding: '10px 0',
    color: 'white',
    fontWeight: 'normal'
  },
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
  listItem: {
    listStyleType: 'none',
    textAlign: 'left',
    borderBottom: '1px solid grey',
    padding: '10px 20px'
  },
  list: {
    padding: '0'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 20px'
  },
  inputText: {
    color: 'grey'
  },
  todoCheck: {
    border: '2px solid grey',
    borderRadius: '50%'
  }
};

const todos = ["Learn React", "Learn Redux", "Pet a cat", "Eat food"];

class TodoListApp extends Component {
  render() {
    return  (
      <div style={styles}>
        <TodoListHeader />
        <TodoInput />
        <TodoList todoListItems={todos}/>
        <TodoListFooter todoCount={todos.length}/>
      </div>
    );
  }
}


ReactDOM.render(<TodoListApp />, document.getElementById("root"));