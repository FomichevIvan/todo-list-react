import { memo } from 'react';
import { MdDone, MdOutlineDoneAll, MdOutlineClose, MdDoneOutline } from 'react-icons/md';
import Text from './Text';
import Input from './Input';

function Todo({ todo }) {
  const {
    date,
    text,
    id,
    status,
    handleDone,
    handleDelete,
    dblClicked,
    setDblClicked,
    handleEdit,
    curr,
    setCurr
  } = todo;

  const onDelete = () => handleDelete(id);
  const onDone = () => handleDone(id);

  return (
    <div className={'block-container'}>
      <div>{date}</div>
      <>
        {dblClicked && curr === id ? (
          <Input
            handleEdit={handleEdit}
            data={text}
            id={id}
            setDblClicked={setDblClicked}
            icon={<MdDoneOutline className={'icon-edit'} />}
          />
        ) : (
          <Text text={text} setDblClicked={setDblClicked} setCurr={setCurr} id={id} />
        )}
      </>
      <div onClick={onDone}>
        {status ? (
          <MdOutlineDoneAll className={dblClicked ? 'icon-done edition' : 'icon-done'} />
        ) : (
          <MdDone className={dblClicked ? 'icon-undone edition' : 'icon-undone'} />
        )}{' '}
      </div>
      <div>
        <MdOutlineClose
          className={dblClicked ? 'icon-delete edition' : 'icon-delete'}
          onClick={onDelete}
        />
      </div>
    </div>
  );
}

export default memo(Todo);
