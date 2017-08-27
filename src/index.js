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


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      activeCities: [] //[{tokyo, asia/tokyo}, {new york, america/newyork}]
    }
    this.addCity = this.addCity.bind(this)
    this.removeCity = this.removeCity.bind(this)
  }
  addCity(city, tz) {
    var s = this.state.activeCities
    s.push({city:city, tz: tz})
    this.setState({activeCities: s})
  }
  removeCity(city) {
    var s = this.state.activeCities.filter(function(element) {
      if (element.city == city) {
        return false
      }
      return true
    })
    this.setState({activeCities: s})
  }
render() {
  return (
    <div className="container">
      <div id="city-panel" className="col-xs-4  bg-dark">
        <h2>Cities</h2>
        <CityPanel addCity={this.addCity} rmCity={this.removeCity}/>
      </div>
      <div className="col-xs-8 bg-light">
        <ClockPanel activeCities={this.state.activeCities}/>
      </div>
    </div>
  )
}
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

class CityButton extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      shouldAdd: true,
      class: "fa-plus-circle"
    }
  }
  toggle() {
    if (this.state.shouldAdd) {
      this.props.addCity(this.props.city, this.props.tz)
      this.setState({
        shouldAdd:false,
        class: "fa-minus-circle"
      })
    }
    else {
      this.props.rmCity(this.props.city)
      this.setState({
        shouldAdd: true,
        class: "fa-plus-circle"
      })
    }
  }
  render() {
    return(
      //<i className="fa fa-plus-circle" aria-hidden="true" onClick={()=>{
      <i className={"fa " + this.state.class} aria-hidden="true" onClick={()=>{
        this.toggle()
      }}></i>
    )
  }
}

class CityPanel extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const addCity = this.props.addCity
    const rmCity = this.props.rmCity
    var list = cities.map(function(val) {
      return <p key={val.city}>{val.city} <CityButton addCity={addCity} rmCity={rmCity} city={val.city} tz={val.tz}/></p>
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
      var list = this.props.activeCities.map(function(val) {
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
