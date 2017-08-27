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
      </div>
    </div>
  )
}

function ClockPanel() {
  return (
      <div className="row text-center">
        <Clock city="New York" tz="America/New_York"/>
        <Clock city="Los Angeles" tz="America/Los_Angeles"/>
        <Clock city="Tokyo" tz="Asia/Tokyo"/>
      </div>
  )
}

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: d.toLocaleTimeString()
    }
  }

  render() {
      return (
        <div className="col-xs-4">
          <h2><Moment interval={1000} format="h:mm:ss A" tz={this.props.tz}/></h2>
          <h3>{this.props.city}</h3>
        </div>
      )
    }
  }

//===================
ReactDOM.render(
  <App/>, document.getElementById('root'));
