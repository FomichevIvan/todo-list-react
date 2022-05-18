import Todo from '../utils/todo';
import { useState, memo } from 'react';

function ControlledInput({ handleList }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    const newTodo = new Todo(text);
    handleList(newTodo);
    setText('');
  };

  return (
    <div className={'input-container'}>
      <input className={'main-input'} value={text} onChange={handleChange} />
      <button className={'main-button'} disabled={!text} onClick={handleSubmit}>
        Create a TODO!
      </button>
    </div>
  );
}

export default memo(ControlledInput);
