import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as hooks from '../hooks/useTodo';
import UpdateTodoForm from './UpdateTodoForm';

describe('UpdateTodoForm', () => {
  const useTodoMock = jest.spyOn(hooks, 'useTodo');

  beforeEach(() => {
    useTodoMock.mockClear();
  });

  test('it renders an input', () => {
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
    render(<UpdateTodoForm todoId={1} />);

    const input = screen.getByLabelText(/update todo/i);

    expect(input).toBeInTheDocument();
  });

  test('it renders an update button', () => {
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
    render(<UpdateTodoForm todoId={1} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  test('it calls the updateTodo function when clicking toggle button', () => {
    const id = 7;
    const mockUpdateTodo = jest.fn();
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
      updateTodo: mockUpdateTodo
    };
    useTodoMock.mockReturnValue(mockValue);
    render(<UpdateTodoForm todoId={id} />);

    userEvent.type(screen.getByLabelText(/update todo/i), 'Hello World');
    userEvent.click(screen.getByRole('button'));

    expect(mockUpdateTodo).toHaveBeenCalledWith(id, 'Hello World');
  });

  test('it shows an error message if input is blank when submitting', () => {
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
    render(<UpdateTodoForm todoId={4} />);

    userEvent.type(screen.getByLabelText(/update todo/i), '');
    userEvent.click(screen.getByRole('button'));

    expect(screen.getByText(/cannot be blank/i)).toBeInTheDocument();
  });
});
