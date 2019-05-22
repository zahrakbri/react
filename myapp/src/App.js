import React from 'react'
import './App.css'
import Login from './components/login'
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from './components/Signup';
import Massenger from './components/Massenger'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import conversation from './reducer/conversation'

const store = createStore(conversation)

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/massenger" component={Massenger} />
        </Router>
      </Provider>
    )
  }
}

export default App
