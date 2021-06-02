import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoButton from './TodoButton';

describe('TodoButton', () => {
  test('it renders a button with a certain text', () => {
    render(<TodoButton dispatchFn={jest.fn()} text="Hello" todoId={1} />);

    const button = screen.getByText('Hello');

    expect(button).toBeInTheDocument();
  });

  test('it calls the dispatch function when clicking add todo item button', () => {
    const mockDispatch = jest.fn();
    const todoId = 1;
    render(<TodoButton dispatchFn={mockDispatch} text="asdf" todoId={todoId} />);

    userEvent.click(screen.getByRole('button'));

    expect(mockDispatch).toHaveBeenCalledWith(todoId);
  });
});
