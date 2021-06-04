import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import App from './App';
import * as hooks from './hooks/useTodo';
import appReducer from './reducer';

const store = createStore(appReducer);

describe('App', () => {
  const useTodoMock = jest.spyOn(hooks, 'useTodo');
  const todoItem = {
    id: 0,
    text: 'Hello World',
    completed: true
  };

  beforeEach(() => {
    useTodoMock.mockClear();
    const mockValue = {
      state: {
        todos: [],
        filters: {
          status: 'asdf',
          colors: []
        }
      },
      addTodo: jest.fn(),
      deleteTodo: jest.fn(),
      toggleTodo: jest.fn(),
      updateTodo: jest.fn()
    };
    useTodoMock.mockReturnValue(mockValue);
  });
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
