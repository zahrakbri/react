import React from 'react'
import axios from 'axios'

export default class SignUp extends React.Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      reTypePassword: '',
      error: ''
      
      
    }
  }

  handleChange (e) {
    var name = e.target.name
    this.setState({ [name]: e.target.value })
  }

  handleClick() {
    console.log('passs', this.state.password, this.state.reTypePassword)
    if(this.state.password === this.state.reTypePassword) {
      let data = {
        email: this.state.email,
        password: this.state.password
      }
      axios.post('https://api.paywith.click/auth/signup/', data)
      .then(function (response) {
        console.log('response::::',response);
        window.localStorage.setItem('token', response.data.token)
        window.localStorage.setItem('id', response.data.id)
      })
      .catch(function (error) {
        console.log('error::::',error);
      });
    } else {
      this.setState({error: 'Passwod and retype password do not match!'})
    }
  }

  render () {
    return (
      <div className='App'>
        <div className='container'>
          <img className='logo' />
          <input
            className='my-input'
            placeholder='email'
            name='email'
            onChange={(event) => this.handleChange(event)}
          />

          <input
            className='my-input'
            placeholder='password'
            name='password'
            onChange={(e) => this.handleChange(e)}
          />

          <input
            className='my-input'
            placeholder='re-type-password'
            name='reTypePassword'
            onChange={(e) => this.handleChange(e)}
          />

          { this.state.error &&
            <p> {this.state.error}</p>
          }

          <button
            className='submit'
            onClick={() => this.handleClick()}
          >
            sign up
          </button>
        </div>
      </div>
    )
  }
}
