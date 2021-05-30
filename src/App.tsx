import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <TodoList />
    </div>
  );
}

export default App;
