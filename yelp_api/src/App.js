import React from 'react';
import logo from './logo.svg';
import './App.css';
import YelpAPICall from './yelpAPIExample.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <YelpAPICall/>
      </header>
    </div>
  );
}

export default App;
