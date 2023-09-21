// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage'; // Import your landing page component

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" component={LandingPage} />
     
                </Routes>
      </Router>
    </div>
  );
}

export default App;
