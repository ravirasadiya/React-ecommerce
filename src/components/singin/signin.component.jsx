import React, { Component } from 'react';
import './signin.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'tets@test.com',
      passoword: '12345',
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
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isgooglesignin>
              {' '}
              Sign In with Google{' '}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
