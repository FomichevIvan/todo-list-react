import { memo } from 'react';
import { MdDone, MdOutlineDoneAll, MdOutlineClose } from 'react-icons/md';

function Todo({ todo }) {
  return (
    <div className={'block-container'}>
      <div>{todo.date}</div>
      <div>{todo.text}</div>
      <div onClick={() => todo.handleDone(todo.id)}>
        {todo.status ? (
          <MdOutlineDoneAll className={'icon-done'} />
        ) : (
          <MdDone className={'icon-undone'} />
        )}{' '}
      </div>
      <div>
        <MdOutlineClose className={'icon-delete'} onClick={() => todo.handleDelete(todo.id)} />
      </div>
    </div>
  );
}

export default memo(Todo);
