function Text({ text, setDblClicked, setCurr, id, ...props }) {
  const startEdition = () => {
    setCurr(id);
    setDblClicked(true);
  };

  return (
    <div className={'todo-text'} {...props} onDoubleClick={startEdition}>
      {text}
    </div>
  );
}

export default Text;
