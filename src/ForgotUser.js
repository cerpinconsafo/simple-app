import React, { useState } from 'react';

function ForgotUser() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can implement logic to help the user recover their username
    // For example, you can make an API request to a backend service.

    // Display the username or an error message based on the result.
    setMessage('Your username is: example@example.com');
  };

  return (
    <div className="forgot-user">
      <h2>Forgot Your Username?</h2>
      <p>Enter your email address to recover your username.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button type="submit">Recover Username</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default ForgotUser;
