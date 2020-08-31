import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Homepage } from './page/homepage/homepage.component';
import './App.css';
import ShopPage from './page/shop/shop.component';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
