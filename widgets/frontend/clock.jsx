import React from 'react'
import ReactDOM from "react-dom"


class Clock extends React.Component {
  
  constructor(props){
    super(props);
    this.state =  {
      time: new Date()
    };
    this.tick = this.tick.bind(this);

  }

  render() {
    return (
      <div className="clock">
        <div className="clockrow">
          <h1 className="start">Time:</h1>
          <p className="timerender end">{this.state.time.toLocaleTimeString()}</p>
        </div>

        <div className="clockrow">
          <h1 className="start">Date:</h1>
          <p className="daterender end">{this.state.time.toLocaleDateString()}</p>
        </div>
      </div>
    )
  }
  
  tick() {
    this.setState({time: new Date() });
  }

  componentDidMount() {
    this.interval = setInterval(this.tick,1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

}

export default Clock;


