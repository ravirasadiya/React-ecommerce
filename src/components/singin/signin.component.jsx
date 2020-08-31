import React, { Component } from 'react';
import './signin.style.scss';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      passoword: '',
    };
  }

  submitForm = (event) => {
    event.prventDefault();
    this.setState({
      email: '',
      passoword: '',
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with youe email and password</span>

        <form onSubmit={this.submitForm}>
          <input
            type='email'
            name='email'
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <label>E-Mail</label>
          <input
            type='password'
            name='password'
            onChange={this.handleChange}
            value={this.state.password}
            required
          />
          <label>Password</label>
          <input type='submit' value='Submit Form' />
        </form>
      </div>
    );
  }
}

export default SignIn;
