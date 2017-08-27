import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Moment from 'react-moment';
import 'moment-timezone';

var d = new Date();

const cities = [
  {city: "New York", tz:"America/New_York"},
  {city: "Los Angeles", tz:"America/Los_Angeles"},
  {city: "Tokyo", tz: "Asia/Tokyo"},
  {city: "Chicago", tz: "America/Chicago" }
];


function App() {
  return (
    <div className="container">
      <div id="city-panel" className="col-xs-4  bg-dark">
        <h2>Cities</h2>
        <CityPanel />
      </div>
      <div className="col-xs-8 bg-light">
        <ClockPanel />
      </div>
    </div>
  )
}
/*
function ClockPanel() {
  return (
      <div className="row text-center">
        <Clock city="New York" tz="America/New_York"/>
        <Clock city="Los Angeles" tz="America/Los_Angeles"/>
        <Clock city="Tokyo" tz="Asia/Tokyo"/>
      </div>
  )
}
*/

class CityPanel extends React.Component {
  render() {
    var list = cities.map(function(val) {
      return <p key={val.city}>{val.city} <i className="fa fa-plus-circle" aria-hidden="true" onClick={()=>{console.log("hi")}}></i></p>
    })
    return (
      <div>
        {list}
      </div>
    )
  }
}

class ClockPanel extends React.Component {
    render() {
      var list = cities.map(function(val) {
        console.log(val);
        return (<Clock key={val.city} city={val.city} tz={val.tz} />)
      })
      return (
        <div className="row text-center">
          {list}
        </div>
      )
    }
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
        <div className="col-xs-6 col-sm-4 col-md-3">
          <h3 className="sometext"><Moment interval={1000} format="h:mm A" tz={this.props.tz}/></h3>
          <h4 className="sometext">{this.props.city}</h4>
        </div>
      )
    }
  }

//===================
ReactDOM.render(
  <App/>, document.getElementById('root'));
