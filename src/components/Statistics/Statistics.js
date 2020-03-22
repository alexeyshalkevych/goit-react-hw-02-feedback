import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  StatisticsFeedbackParagraph,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsContainer>
    <StatisticsFeedbackParagraph>Good: {good}</StatisticsFeedbackParagraph>
    <StatisticsFeedbackParagraph>
      Neutral: {neutral}
    </StatisticsFeedbackParagraph>
    <StatisticsFeedbackParagraph>Bad: {bad}</StatisticsFeedbackParagraph>
    <StatisticsFeedbackParagraph>Total: {total}</StatisticsFeedbackParagraph>
    <StatisticsFeedbackParagraph>
      Positive feedback: {positivePercentage}%
    </StatisticsFeedbackParagraph>
  </StatisticsContainer>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
