import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

const dictionary = {
  pl: {
    yourNick: 'Twój nick',
    moveForward: 'Przejdź dalej',
  },
  en: {
    yourNick: 'Your nick',
    moveForward: 'Move forward',
  },
};

const LanguageContext = createContext(dictionary.en);

const Home = () => {
  const [nick, setNick] = useState('');
  const dictionary = useContext(LanguageContext);

  const handleChange = (event) => {
    setNick(event.target.value);
  };

  return (
    <section>
      Nick: <input onChange={handleChange} />
      <br />
      {dictionary.yourNick}: {nick}
      <br />
      <br />
      <Link to="/chat">{dictionary.moveForward} ></Link>
    </section>
  );
};

const Chat = () => {
  const dictionary = useContext(LanguageContext);
  return <section>{dictionary.yourNick}: ....</section>;
};

const App = () => {
  const [context, setContext] = useState('pl');

  return (
    <div>
      <LanguageContext.Provider value={dictionary[context]}>
        <span onClick={() => setContext('pl')}>pl</span> |{' '}
        <span onClick={() => setContext('en')}>en</span>
        <br />
        <br />
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/chat" component={Chat} />
        </BrowserRouter>
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
