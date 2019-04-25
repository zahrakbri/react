import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <img className='logo' />
        <input className='my-input' placeholder='email' />
        <input className='my-input' placeholder='password' />
        <button className='submit'>
          login
        </button>
      </div>
    </div>
  );
}

export default App;
