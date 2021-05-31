import { useDispatch } from 'react-redux';
import DeleteTodoButton from './DeleteTodoButton';
import UpdateTodoForm from './UpdateTodoForm';

interface ITodoItem {
  todo: TodoType;
};

type TodoType = {
  id: number;
  text: string | number;
  completed: boolean;
  color?: string;
};

function TodoItem({ todo }: ITodoItem): JSX.Element {
  const dispatch: Function = useDispatch();

  const toggleTodoItem = (): void => {
    dispatch({ type: 'todos/todoToggled', payload: todo.id });
  };

  return (
    <div data-testid="TodoItem">
      <h3>{todo.text} | {todo.completed ? "Complete" : "Incomplete"}</h3>
      <button onClick={toggleTodoItem}>Toggle Status</button>
      <DeleteTodoButton todoId={todo.id} />
      <UpdateTodoForm todoId={todo.id} />
    </div>
  );
}

export default TodoItem;
