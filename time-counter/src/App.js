import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  // w celu rozwiazania zadania posluze sie hookiem useRef, ktory
  // sluzy do przechowywania referencji wartosci, ale jego
  // aktualizacja nie powoduje re-rendera
  const counterRef = useRef(0);

  // potrzebuje tez useState z fikcyjna wartoscia zeby moc wymusic re-render
  const [, forceUpdate] = useState();

  // po ukazaniu sie komponentu w UI musimy zaczac odliczac czas
  // w tym celu skorzystamy z hook'a useEffect
  // drugi parametr zdefiniowany jako [] powoduje ze callback z useEffect
  // wywolany bedzie tylko jeden raz czyli uzyskujemy odpowiednik componentDidMount
  useEffect(() => {
    // componentDidMount

    // ustawiam interwal
    const interval = setInterval(() => {
      // nadpisuje licznik
      counterRef.current = counterRef.current + 1;
      // nakazuje zaktualizowac stan zeby wymusic re-render
      forceUpdate({});
    }, 1000);

    return () => {
      // componentWillUnmount

      // czyszcze pamiec usuwajac interwal
      clearInterval(interval);
    };
  }, []);

  return <div>Time on the site {counterRef.current}</div>;
};

export default App;
