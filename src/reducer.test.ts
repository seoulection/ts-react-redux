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
    const todo = result.todos.find(todo => todo.id === 0);

    expect(todo?.completed).toEqual(false);
  });

  test('it deletes a todo item given its id', () => {
    const action = { type: 'todos/todoDeleted', payload: 0 };

    const result = appReducer(initialState, action);

    expect(result.todos.length).toEqual(2);
  });

  test('it updates a todo item given its id', () => {
    const payload = { id: 0, text: 'Leggo' };
    const action = { type: 'todos/todoUpdated', payload: payload };

    const result = appReducer(initialState, action);
    const todo = result.todos.find(todo => todo.id === 0);

    expect(todo?.text).toEqual('Leggo');
  });
});
