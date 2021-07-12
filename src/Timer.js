import React, { Component } from 'react';

class Timer extends Component {
  render() {
    return (
      <div>
        { this.props.minutes === 0 && this.props.seconds === 0
                    ? <div><button>Time's up!</button></div>
                    : <div><button style={{backgroundColor:'#ffc34d'}}>Time Left: {this.props.minutes}m:{this.props.seconds < 10 ? `0${this.props.seconds}` : this.props.seconds}s</button></div>
                }
        
      </div>
    );
  }
}

export default Timer;