import { last } from 'lodash';

interface ActionTodoAdded {
  type: 'todos/todoAdded';
  payload: string;
};

interface ActionTodoToggled {
  type: 'todos/todoToggled';
  payload: number;
}

interface StateType {
  todos: TodoType[];
  filters: FiltersType;
};

type ActionType = ActionTodoAdded | ActionTodoToggled;

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

function nextTodoId(todos: TodoType[]): number {
  const lastTodo: TodoType | undefined = last(todos);
  return lastTodo ? lastTodo.id + 1 : 0;
}

export default function appReducer(state: StateType = initialState, action: ActionType): StateType {
  switch (action.type) {
    case 'todos/todoAdded': {
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
    case 'todos/todoToggled': {
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
    default:
      return state;
  }
}
