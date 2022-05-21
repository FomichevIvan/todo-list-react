import { memo } from 'react';
import Todo from './Todo';

function Layout({ todos, attr }) {
  console.log('todos', todos);
  const { handleDone, handleDelete, handleEdit, curr, setCurr, dblClicked, setDblClicked } = attr;
  const elements = todos?.map(({ id, text, status, createdAt }) => {
    return (
      <Todo
        key={id}
        todo={{
          id,
          text,
          status,
          date: createdAt.toDateString(),
          handleDone,
          handleDelete,
          dblClicked,
          setDblClicked,
          handleEdit,
          curr,
          setCurr
        }}
      />
    );
  });
  return <div className={'main-container'}>{elements}</div>;
}

export default memo(Layout);
