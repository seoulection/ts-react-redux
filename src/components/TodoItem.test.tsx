import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as reactRedux from 'react-redux';
import TodoItem from './TodoItem';

describe('TodoItem', () => {
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  const todoItem = {
    id: 0,
    text: 'Hello World',
    completed: true
  };

  beforeEach(() => {
    useDispatchMock.mockClear();
  });

  test('it renders the text of a todo item', () => {
    render(<TodoItem todo={todoItem} />);

    const todoItemElement = screen.getByText(/hello world/i);

    expect(todoItemElement).toBeInTheDocument();
  });

  test('it renders a status toggle button', () => {
    render(<TodoItem todo={todoItem} />);

    const toggleButton = screen.getByRole('button');

    expect(toggleButton).toBeInTheDocument();
  });

  test('calls the dispatch function when clicking toggle button', () => {
    const mockDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockDispatch);
    render(<TodoItem todo={todoItem} />);

    userEvent.click(screen.getByRole('button'));

    const expectedAction = {
      type: 'todos/todoToggled',
      payload: todoItem.id
    };
    expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
  });
});