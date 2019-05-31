import React from 'react'
import validate from '../validation/validateFunction'
import telegram from '../images/telegram.png'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { withRouter } from "react-router";

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      clicked: false,
      error: {
        email: null,
        password: null
      }
    }
  }

  handleChange (e) {
    // console.log('value::::', e.target.value)
    var name = e.target.name
    this.setState({ [name]: e.target.value })
    // console.log('state::::', this.state.email)
  }

  handleClick () {
    var emailError = validate('email', this.state.email)
    var passwordError = validate('password', this.state.password)

    // var error = {}
    // error.email = emailError
    // error.password = passwordError
    // this.setState({error})
    // this.setState({...this.state, error: {...this.state.error, email:emailError, password: passwordError}})
    let data = {
      email: this.state.email,
      password: this.state.password
    }
    if(emailError || passwordError ) {
      this.setState({error: 'something went wrong'})
    } else {
      axios.post('https://api.paywith.click/auth/signin/', data)
      .then((response) => {
        console.log('response::::',response);
        window.localStorage.setItem('token', response.data.data.token)
        window.localStorage.setItem('id', response.data.data.profile.id)
        this.props.history.push('./massenger')
      })
      .catch((error) => {
        console.log('error::::',error);
      });
    }    
  
    //this.setState({ clicked: !this.state.clicked })
    // if (this.state.clicked === true) {
    //   this.setState({ clicked: false })
    // } else {
    //   this.setState({ clicked: true })
    // }
  }
  render () {
    console.log('propssss', this.props)
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
          { this.state.error.email !== null &&
            <p style={{color: 'red'}}>{this.state.error.email}</p>
          }
          
          <input
            className='my-input'
            type = 'password'
            placeholder='password'
            name='password'
            onChange={(e) => this.handleChange(e)}
          />
          { this.state.error.password !== null &&
            <p style={{color: 'red'}}>{this.state.error.password}</p>
          }
          <button
            className='submit'
            onClick={() => this.handleClick()}
          >
            login
          </button>
          

          <Link
            className='submit link'
            to='./signup'
          >
            sign up
          </Link>
          {/* { this.state.clicked === true &&
            <p>wesrdtfyguhjk</p>
          } */}
          {/* { this.state.clicked === true ? <p>1111111</p> : <p>222222222222</p>
          } */}
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
