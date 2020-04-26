import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { PageNotFound } from './pages/PageNotFound';

const App = () => {
  return (
    <Router>
      <section>
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>

        <Footer />
      </section>
    </Router>
  );
};

export default App;
