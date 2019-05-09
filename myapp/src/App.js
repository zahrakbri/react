import React from 'react'
import './App.css'
import Login from './components/login'
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from './components/Signup';
import Massenger from './components/Massenger'

class App extends React.Component {
  render () {
    return (
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/massenger" component={Massenger} />
    </Router>
    )
  }
}

export default App
