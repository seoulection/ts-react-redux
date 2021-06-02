import { useState } from 'react';
import { useTodo } from '../hooks';

interface IUpdateTodoForm {
  todoId: number;
};

function UpdateTodoForm({ todoId }: IUpdateTodoForm): JSX.Element {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const { updateTodo } = useTodo();

  const handleOnSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    if (text.length === 0) {
      setError('Cannot be blank');
    } else {
      updateTodo(todoId, text);
      setText('');
    }
  };

  return (
    <div data-testid="UpdateTodoForm">
      <form onSubmit={handleOnSubmit}>
        <label>
          Update Todo:
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </label>
        <button type="submit">Update</button>
      </form>
      {error && <h3>{error}</h3>}
    </div>
  );
}

export default UpdateTodoForm;
