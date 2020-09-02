import React, { Component } from 'react';
import './signin.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
  constructor(props) {
    super(props);

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
          <FormInput
            type='email'
            name='email'
            label='E-Mail'
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            type='password'
            name='password'
            label='Password'
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />
          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
