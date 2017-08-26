import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return (
    <div className="container-fluid bg-dark">
      <div id="city-panel" className="col-xs-3">

      </div>
      <div className="col-xs-9 bg-light">
        <ClockPanel />
      </div>
    </div>
  )
}

function ClockPanel() {
  return (
      <div className="row text-center">
        <WorldClock />
      </div>
  )
}

function WorldClock() {
  return (
        <div className="div-col-xs-3">
          <div className="worldClock">
            <Clock />
            <h1>New York</h1>
          </div>
        </div>
  )
}

class Clock extends React.Component {
  constructor() {
    super()
    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
      return <p>{this.state.time}</p>
    }
  }

//===================
ReactDOM.render(
  <App/>, document.getElementById('root'));
