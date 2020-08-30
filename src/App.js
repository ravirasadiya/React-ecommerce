import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Homepage } from './page/homepage/homepage.component';
import './App.css';

const Hats = () => (
  <div>
    <h1>Hats Component</h1>
  </div>
);

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop/hats' component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
