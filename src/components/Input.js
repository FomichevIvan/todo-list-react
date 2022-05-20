function Input({ handleEdit, data, id, setDblClicked, icon, ...props }) {
  const onEdit = (e) => handleEdit(id, e.target.value);

  const onClose = () => setDblClicked(false);

  return (
    <div className={'todo-text'}>
      <input
        {...props}
        className={'input-edit'}
        onChange={onEdit}
        value={data === null || data === undefined ? '' : data}
      />
      <button className={'button-edit'} onClick={onClose}>
        {icon}
      </button>
    </div>
  );
}

export default Input;
