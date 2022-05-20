import Todo from '../utils/todo';
import { useState, memo } from 'react';

function ControlledInput({ handleList, icon }) {
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = () => {
    const newTodo = new Todo(text);
    handleList(newTodo);
    setText('');
  };

  return (
    <div className={'input-container'}>
      <input className={'main-input'} value={text} onChange={handleChange} />
      <button
        className={!text ? 'main-button edition' : 'main-button'}
        disabled={!text}
        onClick={handleSubmit}>
        {icon}
      </button>
    </div>
  );
}

export default memo(ControlledInput);
