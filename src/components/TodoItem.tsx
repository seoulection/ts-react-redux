import { Fragment } from 'react';

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
    <Fragment>
      <h3>{todo.text}</h3>
    </Fragment>
  );
}

export default TodoItem;
