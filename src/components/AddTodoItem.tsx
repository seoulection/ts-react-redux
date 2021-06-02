import { useState } from 'react';
import { useTodo } from '../hooks';

function AddTodoItem(): JSX.Element {
  const [error, setError] = useState('');
  const [text, setText] = useState('');
  const { addTodo } = useTodo();

  const handleOnSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();

    if (text.length === 0) {
      setError('Cannot be blank');
    } else {
      addTodo(text);
      setText('');
    }
  };

  return (
    <div data-testid="AddTodoItem">
      <form onSubmit={handleOnSubmit}>
        <label>
          Todo Text:
          <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </label>
        <button type="submit">Add Todo Item</button>
      </form>
      {error && <h2>{error}</h2>}
    </div>
  );
}

export default AddTodoItem;
