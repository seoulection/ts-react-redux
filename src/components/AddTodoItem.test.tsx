import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as reactRedux from 'react-redux';
import AddTodoItem from './AddTodoItem';

describe('AddTodoItem', () => {
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useDispatchMock.mockClear();
  });

  test('it calls the dispatch function when clicking add todo item button', () => {
    const mockDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockDispatch);
    render(<AddTodoItem />);

    userEvent.type(screen.getByLabelText(/todo text/i), 'Hello World');
    userEvent.click(screen.getByRole('button'));

    const expectedAction = {
      type: 'todos/todoAdded',
      payload: 'Hello World'
    };

    expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
  });

  test('it shows error text if submitting an empty todo item', () => {
    render(<AddTodoItem />);

    userEvent.click(screen.getByRole('button'));

    const errorMessage = screen.getByText(/cannot be blank/i);

    expect(errorMessage).toBeInTheDocument();
  });
});
