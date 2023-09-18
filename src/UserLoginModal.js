// UserLoginModal.js
import React from 'react';
import './UserLoginModal.css'; // Import the CSS file for the modal styles

function UserLoginModal() {
  return (
    <>
      {/* Blurred background */}
      <div className="blurred-background" />

      {/* Login Modal */}
      <div className="login-modal">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="modal-options">
            <a href="#">Forgot User</a>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default UserLoginModal;
