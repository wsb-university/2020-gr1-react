import React from 'react';
import { Hi } from './Hi';
import { Nav } from './Nav';

const sum = (a, b) => {
  return a + b;
};

const Header = () => {
  return <h1>Nagłówek</h1>;
};

const Footer = () => <h4>Nasza stopka strony</h4>;

const List = (props) => {
  return (
    <ul className={props.nazwaKlasy}>
      <li>
        {props.stala} - {props.wymysleGo}
      </li>
      <li>{props.wymysleGo}</li>
      <li>{sum(11, 4)}</li>
    </ul>
  );
};

const Button = (props) => <button>{props.children}</button>;

const Div = (props) => <div>{props.children}</div>;

const App = () => {
  return (
    <Div>
      <Header />
      <List stala="WSB" nazwaKlasy="red" wymysleGo="wymyslony" />
      <List stala="PWR" nazwaKlasy="green" wymysleGo="wymyslony 2" />
      <List stala="UE" nazwaKlasy="pink" />

      <Button>nowy click</Button>
      <Hi name="John" />
      <Nav navContent="Link 1 | Link 2 | Link 3" />
      <Footer />
    </Div>
  );
};

export default App;
