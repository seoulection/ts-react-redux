import appReducer from './reducer';

describe('appReducer', () => {
  const initialState = {
    todos: [
      { id: 0, text: 'Learn React', completed: true },
      { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
      { id: 2, text: 'Ayy lmao', completed: true, color: 'blue' }
    ],
    filters: {
      status: 'All',
      colors: []
    }
  };

  test('it returns the initial state', () => {
    const action = { type: 'todos/default', payload: 'asdf' };

    const result = appReducer(initialState, action);

    expect(result).toEqual(initialState);
  });

  test('it returns a todo list with added item', () => {
    const action = { type: 'todos/todoAdded', payload: 'Hello World' };
    const expected = {
      ...initialState,
      todos: [
        ...initialState.todos,
        { id: 3, text: 'Hello World', completed: false }
      ]
    };

    const result = appReducer(initialState, action);

    expect(result).toEqual(expected);
  });

  test('it toggles the completed status of a todo item given its id', () => {
    const action = { type: 'todos/todoToggled', payload: 0 };

    const result = appReducer(initialState, action);
    const todoItem = result.todos[0];

    expect(todoItem.completed).toEqual(false);
  });
});
