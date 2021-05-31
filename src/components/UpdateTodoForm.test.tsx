import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as reactRedux from 'react-redux';
import UpdateTodoForm from './UpdateTodoForm';

describe('UpdateTodoForm', () => {
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useDispatchMock.mockClear();
  });

  test('it renders an input', () => {
    render(<UpdateTodoForm todoId={1} />);

    const input = screen.getByLabelText(/update todo/i);

    expect(input).toBeInTheDocument();
  });

  test('it renders an update button', () => {
    render(<UpdateTodoForm todoId={1} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  test('it calls the dispatch function when clicking toggle button', () => {
    const id = 7;
    const mockDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockDispatch);
    render(<UpdateTodoForm todoId={id} />);

    userEvent.type(screen.getByLabelText(/update todo/i), 'Hello World');
    userEvent.click(screen.getByRole('button'));

    const expectedAction = {
      type: 'todos/todoUpdated',
      payload: { id: id, text: 'Hello World' }
    };
    expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
  });

  test('it shows an error message if input is blank when submitting', () => {
    render(<UpdateTodoForm todoId={4} />);

    userEvent.type(screen.getByLabelText(/update todo/i), '');
    userEvent.click(screen.getByRole('button'));

    expect(screen.getByText(/cannot be blank/i)).toBeInTheDocument();
  });
});
