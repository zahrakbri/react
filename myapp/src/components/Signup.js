import React from 'react'

export default class SignUp extends React.Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      reTypePassword: ''
    }
  }

  handleChange (e) {
    var name = e.target.name
    this.setState({ [name]: e.target.value })
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

          { this.state.password !== this.state.reTypePassword &&
            <p> your dfghbjnkm </p>
          }

          <button
            className='submit'
          >
            sign up
          </button>
        </div>
      </div>
    )
  }
}
