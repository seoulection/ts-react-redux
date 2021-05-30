import { render, screen } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('TodoItem', () => {
  test('it renders the text of a todo item', () => {
    const todoItem = {
      id: 0,
      text: 'Hello World',
      completed: true
    };
    render(<TodoItem todo={todoItem} />);

    const todoItemElement = screen.getByText(/hello world/i);

    expect(todoItemElement).toBeInTheDocument();
  });
});
