import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Moment from 'react-moment';
import 'moment-timezone';

var d = new Date();



function App() {
  return (
    <div className="container">
      <div id="city-panel" className="col-xs-4  bg-dark">
        <h2>Cities</h2>
      </div>
      <div className="col-xs-8 bg-light">
        <ClockPanel />
        <Moment interval={1000} format="hh:mm:ss" tz="America/Los_Angeles"/>
      </div>
    </div>
  )
}

function ClockPanel() {
  return (
      <div className="row text-center">
        <Clock />
      </div>
  )
}

class Clock extends React.Component {
  constructor() {
    super()
    this.state = {
      time: d.toLocaleTimeString()
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
      return (
        <div className="col-xs-4">
          <h2>{this.state.time}</h2>
          <h3>New York</h3>
        </div>
      )
    }
  }

//===================
ReactDOM.render(
  <App/>, document.getElementById('root'));
