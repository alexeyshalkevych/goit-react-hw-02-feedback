import React, { Component } from 'react';
import './App.css';
import Statistics from '../Statistics/Statistics';

export default class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    if (total) {
      return Math.round((good * 100) / total);
    }

    return 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = 0 || this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </div>
    );
  }
}
