interface ITodoButton {
  dispatchFn: Function;
  text: string;
  todoId: number;
  className?: string;
};

function TodoButton(props: ITodoButton): JSX.Element {
  const handleOnClick = (): void => {
    props.dispatchFn(props.todoId);
  };

  return (
    <button
      className={props.className}
      data-testid="TodoButton"
      onClick={handleOnClick}
    >
      {props.text}
    </button>
  );
}

export default TodoButton;
