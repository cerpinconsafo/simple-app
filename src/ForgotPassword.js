import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can implement logic to send a password reset email
    // For example, you can make an API request to a backend service.

    // Display a success message or error message based on the result.
    setMessage('A password reset link has been sent to your email.');
  };

  return (
    <div className="forgot-password">
      <h2>Forgot Your Password?</h2>
      <p>Enter your email address to reset your password.</p>
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
        <button type="submit">Reset Password</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default ForgotPassword;
