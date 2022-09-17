import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from "../Section/Section";
import { Notification } from "../Notification/Notification";


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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state
    return Math.round(good / (this.countTotalFeedback()) * 100)
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            good={this.handleGood}
            neutral={this.handleNeutral}
            bad={this.handleBad}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage} />
          ) : (
            <Notification message="There is no feedback" />
          )}</Section>
      </>
    )
  }
}