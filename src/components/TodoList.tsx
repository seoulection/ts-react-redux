import { useAppSelector } from '../hooks';
import TodoItem from './TodoItem';

type TodoType = {
  id: number;
  text: string | number;
  completed: boolean;
  color?: string;
};

function TodoList(): JSX.Element {
  const todos: TodoType[] = useAppSelector(state => state.todos);

  return (
    <div data-testid="TodoList">
      <ul className="list-group">
        {todos.map(todo => (
          <li className="list-group-item">
            <TodoItem key={todo.id} todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
