import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import Feedback from '../../utils/Feedback';
import AppContainer from './App.styled';

const options = Object.values(Feedback);

export default class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleFeedbackUpdate = e => {
    const feedbackOption = e.target.textContent;

    this.setState(state => ({
      [feedbackOption]: state[feedbackOption] + 1,
    }));
  };

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
      <AppContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedbackUpdate}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </AppContainer>
    );
  }
}

//         <Section title="Statistics">
//           {good || neutral || bad ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <Notification message="No feedback given" />
//           )}
//         </Section>
