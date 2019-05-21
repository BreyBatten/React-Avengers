import React from 'react';
import './App.css';
import AvengerChars from './AvengerChars';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Avengers by: Brey Batten</h1>
      </header>
      <div className="content">
        <AvengerChars />
      </div>
    </div>
  );
}

export default App;
