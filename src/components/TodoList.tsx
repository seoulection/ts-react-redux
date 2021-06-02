import { useTodo } from '../hooks';
import TodoItem from './TodoItem';

type TodoType = {
    id: number;
      text: string | number;
        completed: boolean;
          color?: string;
};

function TodoList(): JSX.Element {
  const { state } = useTodo();
  const  todos: TodoType[] = state.todos;

  return (
    <div data-testid="TodoList">
      <ul className="list-group">
        {todos.map(todo => (
          <li key={todo.id} className="list-group-item">
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
