import React from 'react';
import AddTodoItem from './components/AddTodoItem';
import TodoList from './components/TodoList';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <TodoList />
      <AddTodoItem />
    </div>
  );
}

export default App;
