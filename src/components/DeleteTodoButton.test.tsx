import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as reactRedux from 'react-redux';
import DeleteTodoButton from './DeleteTodoButton';

describe('DeleteTodoButton', () => {
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useDispatchMock.mockClear();
  });

  test('it renders a button', () => {
    render(<DeleteTodoButton todoId={1} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  test('it calls the dispatch function when clicking add todo item button', () => {
    const id = 1;
    const mockDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockDispatch);
    render(<DeleteTodoButton todoId={id} />);

    userEvent.click(screen.getByRole('button'));

    const expectedAction = {
      type: 'todos/todoDeleted',
      payload: id
    };

    expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
  });
});
