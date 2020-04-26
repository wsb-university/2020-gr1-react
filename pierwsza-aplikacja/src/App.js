import React, { useEffect, useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => setCounter(1), 5000);
    setTimeout(() => setCounter(2), 10000);
    setTimeout(() => setCounter(3), 15000);
  }, []);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    setIsSubmitted(true);
  };

  const handleLogout = () => {
    setEmail('');
    setPassword('');
    setIsSubmitted(false);
  };

  return (
    <>
      <div>Time on the page: {counter}</div>
      {isSubmitted === false && (
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
            <input onChange={handleChangeEmail} value={email} />
          </div>

          <div>
            <label>Password:</label>
            <input
              onChange={handleChangePassword}
              type="password"
              value={password}
            />
          </div>

          <button onClick={handleLogin}>Login</button>
        </section>
      )}

      {isSubmitted === true && (
        <section>
          <div>
            <label>E-mail:</label> {email}
          </div>

          <div>
            <label>Password:</label> {password}
          </div>
          <button onClick={handleLogout}>Logout</button>
        </section>
      )}
    </>
  );
};

export default App;
