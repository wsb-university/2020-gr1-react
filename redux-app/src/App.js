import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

const Home = () => {
  const handleChange = () => {
    console.warn('change');
  };

  return (
    <section>
      Nick: <input onChange={handleChange} />
      <br />
      <br />
      <Link to="/chat">Przejdź dalej ></Link>
    </section>
  );
};

const Chat = () => {
  return <section>Nick: ....</section>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/chat" component={Chat} />
      </BrowserRouter>
    </div>
  );
};

export default App;
