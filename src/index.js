import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function WorldClock() {
  return (
    <div className="worldClock">
      <Clock />
      <h1>New York</h1>
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
  <WorldClock/>, document.getElementById('root'));
