import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import App from './App';
import appReducer from './reducer';

const store = createStore(appReducer);

describe('App', () => {
  test('it renders the todo list', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const todoList = screen.getByTestId('TodoList');
    expect(todoList).toBeInTheDocument();
  });

  test('it renders the add todo item component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const addTodoItem = screen.getByTestId('AddTodoItem');
    expect(addTodoItem).toBeInTheDocument();
  });
});
