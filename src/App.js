import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Homepage } from './page/homepage/homepage.component';
import './App.css';
import ShopPage from './page/shop/shop.component';
import Header from './components/header/header.component';
import SingInSignUpPage from './page/signin-singup-page/signInSignUp.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      createUserProfileDocument(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SingInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
