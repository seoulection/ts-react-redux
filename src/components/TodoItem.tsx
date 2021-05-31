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
  return (
    <div data-testid="TodoItem">
      <h3>{todo.text} | {todo.completed ? "Complete" : "Incomplete"}</h3>
      <TodoButton
        action="todos/todoToggled"
        text="Toggle Status"
        todoId={todo.id}
      />
      <TodoButton
        action="todos/todoDeleted"
        text="Delete"
        todoId={todo.id}
      />
      <UpdateTodoForm todoId={todo.id} />
    </div>
  );
}

export default TodoItem;
