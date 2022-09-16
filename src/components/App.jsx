import { Component } from 'react';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1
      }
    })
  }

  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1
      }
    })
  }

  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1
      }
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <button type="button" onClick={this.handleGood}>Good</button>
          <button type="button" onClick={this.handleNeutral}>Neutral</button>
          <button type="button" onClick={this.handleBad}> Bad</button></div>
        <div>
          <h2>Statistics</h2>
          <span>Good:{this.state.good}</span>
          <span>Neutral:{this.state.neutral}</span>
          <span>Bad:{this.state.bad}</span></div>
      </div>
    )
  }

}