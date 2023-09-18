// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserLoginModal from './UserLoginModal';
import ForgotUser from './ForgotUser';
import ForgotPassword from './ForgotPassword';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/forgot-user" component={ForgotUser} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/" component={UserLoginModal} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
