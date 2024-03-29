/*
Adapted from https://github.com/peterdurham/timers-demo/blob/master/src/components/Stopwatch.js
*/

import React, { Component } from "react";
import "../App.css";
import NoSleep from 'nosleep.js';

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.noSleep = new NoSleep();
    this.state = {
      timerOn: false,
      timerStart: 0,
      timerTime: 0
    };
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.noSleep.enable();
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
      if(this.props.onChange)
      {
        this.props.onChange(this.state.timerTime);
      }
    }, 1000);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    this.noSleep.disable();
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
    if(this.props.onChange)
    {
      this.props.onChange(0);
    }
  };

  render() {
    const { timerTime } = this.state;
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    return (
      <div className="Stopwatch">
        {/*<div className="Stopwatch-header">Stopwatch</div>*/}
        <div className="Stopwatch-display">
          {minutes} : {seconds}
        </div>
        {this.state.timerOn === false && this.state.timerTime === 0 && (
          <button onClick={this.startTimer}>Start</button>
        )}
        {this.state.timerOn === true && (
          <button onClick={this.stopTimer}>Stop</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.startTimer}>Resume</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.resetTimer}>Reset</button>
        )}
      </div>
    );
  }
}

export default Stopwatch;
