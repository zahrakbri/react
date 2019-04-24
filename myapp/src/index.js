import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

var name = 'zahra'
var name2 = 'zahraaa'
const greeting = 
  <div>
    <h1> salam {name}. </h1>
    <h1> salam {name2}. </h1>
  </div>

function Welcome(props) {
  return(
    <div>
      <h1> salam zahra!</h1>
    </div>
  )
}



ReactDOM.render(<Welcome />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
