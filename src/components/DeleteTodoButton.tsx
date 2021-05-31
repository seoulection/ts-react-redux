import { useDispatch } from 'react-redux';

interface IDeleteTodoButton {
  todoId: number;
};

function DeleteTodoButton({ todoId }: IDeleteTodoButton): JSX.Element {
  const dispatch: Function = useDispatch();

  const handleOnClick = () => {
    dispatch({ type: 'todos/todoDeleted', payload: todoId });
  };

  return <button onClick={handleOnClick}>Delete</button>;
}

export default DeleteTodoButton;
