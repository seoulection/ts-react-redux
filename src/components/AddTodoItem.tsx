import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';

function AddTodoItem(): JSX.Element {
  const [error, setError] = useState('');
  const [text, setText] = useState('');
  const dispatch: Function = useDispatch();

  const handleOnClick = (): void => {
    if (text.length === 0) {
      setError('Cannot be blank');
    } else {
      dispatch({ type: 'todos/todoAdded', payload: text });
    }
    setText('');
  };

  return (
    <Fragment>
      <label>
        Todo Text:
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
      </label>
      <button onClick={handleOnClick}>Add Todo Item</button>
      {error && <h2>{error}</h2>}
    </Fragment>
  );
}

export default AddTodoItem;
