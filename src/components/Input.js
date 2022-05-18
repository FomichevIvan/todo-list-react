function Input({ handleEdit, data, id, setDblClicked, icon, ...props }) {
  return (
    <div className={'todo-text'}>
      <input
        className={'input-edit'}
        {...props}
        onChange={(e) => handleEdit(id, e.target.value)}
        value={data === null || data === undefined ? '' : data}
      />
      <button className={'button-edit'} onClick={() => setDblClicked(false)}>
        {icon}
      </button>
    </div>
  );
}

export default Input;
