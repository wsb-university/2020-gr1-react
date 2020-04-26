import React, { Component } from 'react';

class Nav extends Component {
  state = {
    counter: 0,
  };

  constructor() {
    super();

    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  render() {
    return <nav>Time on the page: {this.state.counter}</nav>;
  }
}

export { Nav };
