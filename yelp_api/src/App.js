/* jshint esversion: 6 */
import React from 'react';
import SearchForm from './components/SearchForm';
import DisplayRestaurant from './components/DisplayRestaurant';
import User from './components/UserClass';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchForm />
      <DisplayRestaurant />
      <User />
    </div>
  );
}

export default App;
