import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import clockBase from './clockBase.jpg'
/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
      </div>
    )
  }
}
class Clock extends Component {
  render() {
    return (
      <div>
      <img src={clockBase} alt = "clock" height="100px" width="100px"/>
      </div>
    )
  }
}

export default App;
