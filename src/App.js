import React from 'react';

import ContactCard from './ContactCard'; // Import the ContactCard component
import './App.css'; // Import the custom CSS file

function App() {
  return (
    <div className="App">
      <h1>How Long Has It Been?</h1>
      <p>App name or phrase here I think.</p>      
      <ContactCard /> {/* Add the ContactCard component here */}
    </div>
  );
}

export default App;
