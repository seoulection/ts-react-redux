import { useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();

  const toggleTodoItem = () => {
    dispatch({ type: 'todos/todoToggled', payload: todo.id });
  };

  return (
    <div data-testid="TodoItem">
      <h3>{todo.text} | {todo.completed ? "Complete" : "Incomplete"}</h3>
      <button onClick={toggleTodoItem}>Toggle Status</button>
    </div>
  );
}

export default TodoItem;