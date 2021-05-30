import { render, screen } from '@testing-library/react';
import * as hooks from '../hooks';
import TodoList from './TodoList';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn()
}));

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

    const todoItems = screen.getAllByTestId('TodoItem');

    expect(todoItems.length).toEqual(3);
  });
});
