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
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
}

export default TodoList;
