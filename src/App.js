import { useCallback, useState } from 'react';
import ControlledInput from './components/ControlledInput';
import Layout from './components/Layout';
import Todo from './components/Todo';
import { MdOutlinePlayArrow } from 'react-icons/md';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [curr, setCurr] = useState('');
  const [started, setStarted] = useState(false);
  const [dblClicked, setDblClicked] = useState(false);

  const handleDone = (id) => {
    setList((list) =>
      list?.map((todo) => {
        return todo.id === id && !dblClicked ? { ...todo, status: !todo.status } : todo;
      })
    );
  };

  const handleDelete = (id) => {
    !dblClicked &&
      setList((list) =>
        list?.filter((todo) => {
          return todo.id !== id;
        })
      );
  };

  const handleEdit = (id, payload) => {
    setList((list) =>
      list?.map((todo) => {
        return todo.id === curr ? { ...todo, text: payload } : todo;
      })
    );
  };

  const handleList = useCallback((todo) => {
    setList((prevState) => [todo, ...prevState]);
  }, []);

  const elements = list?.map(({ id, text, status, createdAt }) => {
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

  return (
    <div className="App">
      {started ? (
        <ControlledInput
          handleList={handleList}
          icon={<MdOutlinePlayArrow className={'icon-start'} />}
        />
      ) : null}
      {list.length ? (
        <Layout todos={elements} />
      ) : (
        <button onClick={() => setStarted(true)} className={started ? 'start-none' : 'start'}>
          Start to proctrastinate!
        </button>
      )}
    </div>
  );
}

export default App;
