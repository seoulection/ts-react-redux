import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as hooks from '../hooks/useTodo';
import AddTodoItem from './AddTodoItem';

describe('AddTodoItem', () => {
  const useTodoMock = jest.spyOn(hooks, 'useTodo');

  beforeEach(() => {
    useTodoMock.mockClear();
  });

  test('it calls the dispatch function when clicking add todo item button', () => {
    const mockAddTodo = jest.fn();
    const mockValue = {
      state: {
        todos: [],
        filters: {
          status: 'asdf',
          colors: []
        }
      },
      addTodo: mockAddTodo,
      deleteTodo: jest.fn(),
      toggleTodo: jest.fn(),
      updateTodo: jest.fn()
    };
    useTodoMock.mockReturnValue(mockValue);
    render(<AddTodoItem />);

    userEvent.type(screen.getByLabelText(/todo text/i), 'Hello World');
    userEvent.click(screen.getByRole('button'));

    expect(mockAddTodo).toHaveBeenCalledWith('Hello World');
  });

  test('it shows error text if submitting an empty todo item', () => {
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
    render(<AddTodoItem />);

    userEvent.click(screen.getByRole('button'));

    const errorMessage = screen.getByText(/cannot be blank/i);

    expect(errorMessage).toBeInTheDocument();
  });
});
