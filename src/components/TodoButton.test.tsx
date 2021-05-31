import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as reactRedux from 'react-redux';
import TodoButton from './TodoButton';

describe('TodoButton', () => {
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useDispatchMock.mockClear();
  });

  test('it renders a button with a certain text', () => {
    render(<TodoButton text="Hello" todoId={1} action="asdf" />);

    const button = screen.getByText('Hello');

    expect(button).toBeInTheDocument();
  });

  test('it calls the dispatch function when clicking add todo item button', () => {
    const mockDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockDispatch);
    render(<TodoButton text="asdf" todoId={1} action="asdf" />);

    userEvent.click(screen.getByRole('button'));

    const expectedAction = {
      type: 'asdf',
      payload: 1
    };

    expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
  });
});
