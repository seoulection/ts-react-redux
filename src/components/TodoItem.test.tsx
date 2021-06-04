import { render, screen } from '@testing-library/react';
import * as hooks from '../hooks/useTodo';
import TodoItem from './TodoItem';

describe('TodoItem', () => {
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

  test('it renders the text of a todo item', () => {
    render(<TodoItem todo={todoItem} />);

    const todoItemElement = screen.getByText(/hello world/i);

    expect(todoItemElement).toBeInTheDocument();
  });

  test('it renders a status toggle button', () => {
    render(<TodoItem todo={todoItem} />);

    const toggleButton = screen.getByText('Toggle Status');

    expect(toggleButton).toBeInTheDocument();
  });

  test('it renders a delete button', () => {
    render(<TodoItem todo={todoItem} />);

    const deleteButton = screen.getByText('Delete');

    expect(deleteButton).toBeInTheDocument();
  });

  test('it renders the update todo form', () => {
    render(<TodoItem todo={todoItem} />);

    const form = screen.getByTestId('UpdateTodoForm');

    expect(form).toBeInTheDocument();
  });
});
