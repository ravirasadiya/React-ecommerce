import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Homepage } from './page/homepage/homepage.component';
import './App.css';
import ShopPage from './page/shop/shop.component';
import Header from './components/header/header.component';
import SingInSignUpPage from './page/signin-singup-page/signInSignUp.component';
import { auth } from './firebase/firebase.util';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  render() {
    return (
      <div className='App'>
        <Header />
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
