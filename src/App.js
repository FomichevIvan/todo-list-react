import { useCallback, useState, useReducer } from 'react';
import ControlledInput from './components/ControlledInput';
import Layout from './components/Layout';
import { MdOutlinePlayArrow } from 'react-icons/md';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [curr, setCurr] = useState('');
  const [started, setStarted] = useState(false);
  const [dblClicked, setDblClicked] = useState(false);

  const initialState = {
    list: [],
    curr: '',
    started: false,
    dblClicked: false
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return { ...state, list: [...state.list, action.payload] };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state, 'state');

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

  const onStart = () => setStarted(true);
  return (
    <div className="App">
      {started ? (
        <ControlledInput
          dispatch={dispatch}
          handleList={handleList}
          icon={<MdOutlinePlayArrow className={'icon-start'} />}
        />
      ) : null}
      {state.list.length ? (
        <Layout
          todos={state.list}
          attr={{
            handleDone,
            handleDelete,
            handleEdit,
            curr,
            setCurr,
            dblClicked,
            setDblClicked
          }}
        />
      ) : (
        <button onClick={onStart} className={started ? 'start-none' : 'start'}>
          Start to proctrastinate!
        </button>
      )}
    </div>
  );
}

export default App;
