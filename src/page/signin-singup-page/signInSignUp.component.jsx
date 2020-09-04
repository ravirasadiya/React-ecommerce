import React from 'react';
import './signInSignUp.style.scss';
import SignIn from '../../components/singin/signin.component';
import SignUp from '../../components/signup/sign-up.component';

const SingInSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SingInSignUpPage;
