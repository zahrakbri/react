import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

var name = 'zahra'
var name2 = 'zahraaa'
const greeting =
  <div>
    <h1> salam {name}. </h1>
    <h1> salam {name2}. </h1>
  </div>

function Welcome (props) {
  console.log('props:::', props)
  return (
    <div>
      <h1> salam {props.name}     {props.lastname}!</h1>
    </div>
  )
}

function ParentComponent (props) {
  return (
    <div>
      <Welcome firstname='rezvan' lastname='habibi' />
      <Welcome name='ali' firstname='amir' lastname='habibi' />
      <Welcome name='zahra' firstname='zahra' lastname='habibi' />
      <Welcome name='rezvan' firstname='rezvan' lastname='kabiri' />
    </div>
  )
}

class ParentClass extends React.Component {
  render () {
    console.log('this::', this)
    return (
      <div>
        <h1>
          salam {this.props.name}!
        </h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
