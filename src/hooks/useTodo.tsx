import React, { useContext, useMemo, useReducer } from 'react';
import { last } from 'lodash';

interface ActionTodoAdded {
  type: 'todos/todoAdded';
  payload: string;
};

interface ActionTodoToggled {
  type: 'todos/todoToggled';
  payload: number;
};

interface ActionTodoDeleted {
  type: 'todos/todoDeleted';
  payload: number;
};

interface ActionTodoUpdated {
  type: 'todos/todoUpdated',
  payload: { id: number, text: string }
};

interface DefaultAction {
  type: string;
  payload: any;
};

interface StateType {
  todos: TodoType[];
  filters: FiltersType;
};

type ActionType = ActionTodoAdded | ActionTodoToggled | ActionTodoDeleted | ActionTodoUpdated | DefaultAction;

type TodoType = {
  id: number;
  text: string | number;
  completed: boolean;
  color?: string;
};

type FiltersType = {
  status: string;
  colors: string[];
};

interface IActionTypes {
  add: string;
  toggle: string;
  delete: string;
  update: string;
};

const actionTypes: IActionTypes = {
  add: 'todos/todoAdded',
  toggle: 'todos/todoToggled',
  delete: 'todos/todoDeleted',
  update: 'todos/todoUpdated'
};

const initialState: StateType = {
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

const TodoContext = React.createContext({});

function nextTodoId(todos: TodoType[]): number {
  const lastTodo: TodoType | undefined = last(todos);
  return lastTodo ? lastTodo.id + 1 : 0;
}

function todoReducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case actionTypes.add: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false
          }
        ]
      };
    }
    case actionTypes.toggle: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload) {
            return todo;
          }
          return {
            ...todo,
            completed: !todo.completed
          };
        })
      };
    }
    case actionTypes.delete: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    }
    case actionTypes.update: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload.id) {
            return todo;
          }
          return {
            ...todo,
            text: action.payload.text
          };
        })
      };
    }
    default:
      return state;
  }
}

// TODO: find out the interface for this component
function TodoProvider(props: any): JSX.Element {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  return (
    <TodoContext.Provider value={value} {...props} />
  );
}

type UseTodoType = {
  state: StateType;
  addTodo: Function;
  deleteTodo: Function;
  toggleTodo: Function;
  updateTodo: Function;
};

function useTodo(): UseTodoType {
  // TODO: find out the type for this
  const [state, dispatch]: any = useContext(TodoContext);

  const addTodo = (text: string): void =>
    dispatch({ type: actionTypes.add, payload: text });
  const deleteTodo = (id: number): void =>
    dispatch({ type: actionTypes.delete, payload: id });
  const toggleTodo = (id: number): void =>
    dispatch({ type: actionTypes.toggle, payload: id });
  const updateTodo = (id: number, text: string): void =>
    dispatch({ type: actionTypes.update, payload: { id: id, text: text } });

  return { state, addTodo, deleteTodo, toggleTodo, updateTodo };
}

export { useTodo, TodoProvider };
