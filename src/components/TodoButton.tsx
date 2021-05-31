import { useDispatch } from 'react-redux';

interface ITodoButton {
  action: string;
  text: string;
  todoId: number;
};

function TodoButton(props: ITodoButton): JSX.Element {
  const dispatch = useDispatch();

  const handleOnClick = (): void => {
    dispatch({ type: props.action, payload: props.todoId });
  };

  return (
    <button
      data-testid="TodoButton"
      onClick={handleOnClick}
    >
      {props.text}
    </button>
  );
}

export default TodoButton;
