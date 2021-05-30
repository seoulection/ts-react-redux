import { render, screen } from '@testing-library/react';
import * as hooks from '../hooks';
import TodoList from './TodoList';

describe('TodoList', () => {
  const useSelectorMock = jest.spyOn(hooks, 'useAppSelector');
  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  test('it renders a list of 3 todo items', () => {
    const mockTodos = [
      {
        id: 0,
        text: 'Hello World',
        completed: true
      },
      {
        id: 1,
        text: 'Goodbye World',
        completed: true
      },
      {
        id: 2,
        text: 'Hello Goodbye',
        completed: true
      }
    ];
    useSelectorMock.mockReturnValue(mockTodos);
    render(<TodoList />);

    const todoListElement = screen.getByTestId('TodoList');

    expect(todoListElement.children.length).toEqual(3);
  });
});
