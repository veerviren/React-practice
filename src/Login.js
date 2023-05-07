import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (name.length < 4 || /\d/.test(name)) {
      setError(
        "Name should be at least 4 characters long and not contain a number."
      );
    } else if (password.length < 5) {
      setError("Password should be at least 5 characters long.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setIsLoggedIn(true);
    }
  }

  return (
    <>
      {isLoggedIn ? (
        <h1>Welcome, {name}!</h1>
      ) : (
        <>
          <h1>Login</h1>
          {error && <div className="error">{error}</div>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </>
      )}
    </>
  );
}

export default Login;
