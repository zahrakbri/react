import React from 'react'
import telegram from '../images/telegram.png'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      clicked: false
    }
  }

  handleChange (e) {
    console.log('value::::', e.target.value)
    var name = e.target.name
    this.setState({ [name]: e.target.value }, () => console.log('callback', this.state[name]))
    console.log('state::::', this.state.email)
  }

  handleClick () {
    this.setState({ clicked: !this.state.clicked })
    // if (this.state.clicked === true) {
    //   this.setState({ clicked: false })
    // } else {
    //   this.setState({ clicked: true })
    // }
  }
  render () {
    return (
      
        <div className='App'>
        <div className='container'>
          <img
            className='logo'
            style={{ width: '30px', alignSelf: 'center' }}
            src={telegram} />
          <input
            name='email'
            className='my-input'
            placeholder='email'
            onChange={(e) => this.handleChange(e)}
          />
          { this.state.email.length >= 2 && this.state.email.length < 5 &&
            <p>{this.state.email}</p>
          }
          
          <input
            className='my-input'
            placeholder='password'
            name='password'
            onChange={(e) => this.handleChange(e)}
          />
          <button
            className='submit'
            onClick={() => this.handleClick()}
          >
            login
          </button>
          {/* { this.state.clicked === true &&
            <p>wesrdtfyguhjk</p>
          } */}
          { this.state.clicked === true ? <p>1111111</p> : <p>222222222222</p>
          }
        </div>
      </div>
    )
  }
}

export default Login
