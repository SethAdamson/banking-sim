import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Login from './component/Login/Login';
import Private from './component/Private/Private';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route component={Login} path='/' exact />
            <Route component={Private} path='/private' />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
