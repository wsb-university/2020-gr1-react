import React, { Component } from 'react';

class App extends Component {
  state = {
    email: '',
    password: '',
    isSubmitted: false,
    counter: 0,
  };

  constructor() {
    super();

    console.warn(document.getElementById('test'));

    console.log('Tworzenie instancji komponentu.');
  }

  componentDidMount() {
    console.log('ComponentDidMount');

    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);

    console.warn(document.getElementById('test'));
  }

  handleLogin = (event) => {
    this.setState({ isSubmitted: true });
  };

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleLogout = () => {
    this.setState({ password: '', email: '', isSubmitted: false });
  };

  render() {
    console.log('Render');
    return (
      <>
        <div id="test">Time on the page: {this.state.counter}</div>
        {this.state.isSubmitted === false && (
          <section className="red" id="test">
            <div>
              <label
                style={{
                  fontWeight: 'bold',
                  color: '#ccc',
                }}
              >
                E-mail:
              </label>
              <input
                onChange={this.handleChangeEmail}
                value={this.state.email}
              />
            </div>

            <div>
              <label>Password:</label>
              <input
                onChange={this.handleChangePassword}
                type="password"
                value={this.state.password}
              />
            </div>

            <button onClick={this.handleLogin}>Login</button>
          </section>
        )}

        {this.state.isSubmitted === true && (
          <section>
            <div>
              <label>E-mail:</label> {this.state.email}
            </div>

            <div>
              <label>Password:</label> {this.state.password}
            </div>
            <button onClick={this.handleLogout}>Logout</button>
          </section>
        )}
      </>
    );
  }
}

export default App;
