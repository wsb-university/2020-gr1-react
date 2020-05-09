import React, { useEffect, useRef, useState } from 'react';

class ClassCounter extends React.Component {
  state = {
    counter: 0,
  };

  componentWillMount() {
    setInterval(() => {
      this.state.counter = this.state.counter + 1;
      //   this.setState({ counter: this.state.counter + 1 });
      this.forceUpdate();
    }, 1000);
  }

  render() {
    return <div>[TEST]: Time on the site {this.state.counter}</div>;
  }
}

const App = () => {
  const counter = useRef(0);
  const [, forceUpdate] = useState({});

  useEffect(() => {
    setInterval(() => {
      counter.current = counter.current + 1;
      forceUpdate({});
    }, 1000);
  }, []);

  return (
    <div>
      <div>Time on the site {counter.current}</div>
      <ClassCounter />
    </div>
  );
};

export default App;

// // typy proste
// let text = 'to jest text'; // string
// let numer = 3; // number
// let wartoscLogiczna = true; // boolean

// // undefined
// // null
// // Symbol

// // typy złozone

// // pamiec przegladarki: { text: 'to jest oryginalny tekst' };

// let obj = { text: 'to jest oryginalny tekst' }; // id = 1234 - referencja
// let func = () => null;
// let arr = [];

// // typy proste przekazywane sa przez wartosci
// let a = text; // 'to jest text'
// text = 'nowy tekst';
// // console.log({ text, a });
// a = 'kolejny tekst';
// // console.log({ text, a });

// // typy zlozone przekazywane sa przez referencje
// let b = obj; // id = 1234 - referencja

// // console.log(obj.text);
// // console.log(b.text);

// b.text = 'nasz nowy tekst';

// // console.log(obj.text);
// // console.log(b.text);

// const counter = { value: 0 }; // ref = 1234

// function increment(counter) {
//   // referencja
//   counter.value = counter.value + 1;
//   //   console.log(counter);
// }

// increment({ ...counter }); // kopiuj obiekt
// // { ...counter } - nowy obiekt w pamieci podrecznej // ref = 12345

// // console.log(counter);

// const test = {
//   value: 10,
//   next: {
//     value: 11,
//   },
// };

// let c = JSON.parse(JSON.stringify(test)); // glebokie klonowanie

// c.value = 11;

// console.log(test.value);
// console.log(c.value);

// c.next.value = 14;

// console.log(test.next.value); // 11
// console.log(c.next.value); // 14
