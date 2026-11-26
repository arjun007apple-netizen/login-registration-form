
import React, { useState } from 'react';
import './App.css';

function App() {
  const [details, setDetails] = useState(null);
  const [message, setMessage] = useState('');
  const [login, setLogin] = useState(false);

  function register(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setDetails(Object.fromEntries(data.entries()));
  }

  function loginUser(e) {
    e.preventDefault();
    setMessage('Login Successful!');
  }

  return (
    <div className="container">
      <h1>Student Portal</h1>

      <button onClick={() => setLogin(false)}>Register</button>
      <button onClick={() => setLogin(true)}>Login</button>

      {login ? (
        <form onSubmit={loginUser}>
          <h2>Login Form</h2>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <h3>{message}</h3>
        </form>
      ) : (
        <form onSubmit={register}>
          <h2>Registration Form</h2>
          <input name="Name" placeholder="Name" required />
          <input name="RollNo" placeholder="Roll Number" required />
          <input name="Address" placeholder="Address" required />
          <input name="Aadhaar" placeholder="Aadhaar Number" maxLength="12" required />
          <button type="submit">Register</button>
        </form>
      )}

      {details && !login && (
        <div>
          <h2>Registered Details</h2>
          {Object.entries(details).map(([key, value]) => (
            <p key={key}>{key}: {value}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
