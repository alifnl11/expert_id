import React, {Component} from 'react';
import { Route , Switch} from 'react-router-dom';
import 'boxicons';

import './default.css';
import HomePage from './Home/index';
import LoginPage from './Login/index';
import RegisterPage from './Register/index';


function App() {
  return (
    <div className="App">
      <div className="main">
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
