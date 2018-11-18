import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import Error from './Error';
import Success from './Success';
import Register from './Register';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => (
            localStorage.getItem('user')
            ? <Success />
            : <Redirect to={{ pathname: '/login' }} />
          )}/>
          <Route path='/login' render={() => (
            <Login />
          )}/>
          <Route path='/error' render={() => (
            <Error />
          )}/>
          <Route path='/register' render={() => (
            <Register />
          )}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(App));
