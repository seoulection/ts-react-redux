import { useTodo } from '../hooks';
import TodoButton from './TodoButton';
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
  const { deleteTodo, toggleTodo } = useTodo();

  return (
    <div data-testid="TodoItem">
      <h3>{todo.text}</h3>
      <p>Status: {todo.completed ? "Complete" : "Incomplete"}</p>
      <TodoButton
        className="btn btn-primary"
        dispatchFn={toggleTodo}
        text="Toggle Status"
        todoId={todo.id}
      />
      <TodoButton
        className="btn btn-danger"
        dispatchFn={deleteTodo}
        text="Delete"
        todoId={todo.id}
      />
      <UpdateTodoForm todoId={todo.id} />
    </div>
  );
}

export default TodoItem;
