import React, { createContext, useContext, useReducer } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

// definicja domyslnego stanu
const initialState = {
  nick: '',
};

// definiuje reducer
const reducer = (state, action) => {
  // action : {type: string, payload: any}
  switch (action.type) {
    case 'SET_NICK':
      return { ...state, nick: action.payload };

    case 'CLEAR_NICK':
      return { ...state, nick: '' };

    default:
      return { ...state };
  }
};

// [nick, setNick] = useState('') -> function useState(value) { ... return [value, callback] }

// definicja customowego hook'a
const useActions = (state, dispatch) => {
  return {
    setNick: (nick) => dispatch({ type: 'SET_NICK', payload: nick }),
    clearNick: () => dispatch({ type: 'CLEAR_NICK' }),
  };
};

// Tworze STORE znany z redux
const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  return (
    <StoreContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </StoreContext.Provider>
  );
};

const Chat = () => {
  const { state, actions, dispatch } = useContext(StoreContext);

  const handleClear = () => {
    // actions.clearNick();

    dispatch({ type: 'CLEAR_NICK' });
  };

  return (
    <div>
      <section>Twoj nick: {state.nick}</section>
      <button onClick={handleClear}>wyczysc</button>
    </div>
  );
};

const Home = () => {
  const { state, actions, dispatch } = useContext(StoreContext);

  const handleChange = (event) => {
    // dispatch({ type: 'SET_NICK', payload: event.target.value });

    actions.setNick(event.target.value);
  };

  return (
    <section>
      Nick: <input onChange={handleChange} />
      <br />
      Twoj nick: {state.nick}
      <br />
      <br />
      <Link to="/chat">Przejdz dalej ></Link>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <StoreProvider>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/chat" component={Chat} />
        </BrowserRouter>
      </StoreProvider>
    </div>
  );
};

export default App;
