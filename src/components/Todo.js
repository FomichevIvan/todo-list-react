import { memo } from 'react';
import { MdDone, MdOutlineDoneAll, MdOutlineClose } from 'react-icons/md';

function Todo({ todo }) {
  const { date, text, id, status, handleDone, handleDelete } = todo;
  return (
    <div className={'block-container'}>
      <div>{date}</div>
      <div>{text}</div>
      <div onClick={() => handleDone(id)}>
        {status ? (
          <MdOutlineDoneAll className={'icon-done'} />
        ) : (
          <MdDone className={'icon-undone'} />
        )}{' '}
      </div>
      <div>
        <MdOutlineClose className={'icon-delete'} onClick={() => handleDelete(id)} />
      </div>
    </div>
  );
}

export default memo(Todo);
