import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: 'wsdfgh',
      password: ''
    }
  }

  handleChange(e) {
    console.log('e:', e.target.value)
    this.setState({email : e.target.value})
  }

  handleClick() {
    console.log('this',this)
  }
  render() {
    return (
      <div className="App">
        <div className='container'>
          <img className='logo' />
          <input
            className='my-input'
            placeholder='email'
            onChange = {(e) => this.handleChange(e)}
            />

          <p> {this.state.email} </p>
          <input className='my-input' placeholder='password' />
          <button
            className='submit'
            onClick = {() => this.handleClick() }
          >
            login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
