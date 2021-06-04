import { render, screen } from '@testing-library/react';
import * as hooks from '../hooks/useTodo';
import TodoList from './TodoList';

describe('TodoList', () => {
  const useTodoMock = jest.spyOn(hooks, 'useTodo');
  beforeEach(() => {
    useTodoMock.mockClear();
  });

  test('it renders a list of 3 todo items', () => {
    const mockTodos = [
      {
        id: 0,
        text: 'Hello World',
        completed: true
      },
      {
        id: 1,
        text: 'Goodbye World',
        completed: true
      },
      {
        id: 2,
        text: 'Hello Goodbye',
        completed: true
      }
    ];
    const mockState = {
      todos: mockTodos,
      filters: {
        status: 'All',
        colors: []
      }
    };
    const mockValue = {
      state: mockState,
      addTodo: jest.fn(),
      deleteTodo: jest.fn(),
      toggleTodo: jest.fn(),
      updateTodo: jest.fn()
    };

    useTodoMock.mockReturnValue(mockValue);
    render(<TodoList />);

    const todoItems = screen.getAllByTestId('TodoItem');

    expect(todoItems.length).toEqual(3);
  });
});
