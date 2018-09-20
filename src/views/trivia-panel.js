import PropTypes from 'prop-types';
import React from 'react';

const TriviaPanel = (props) => (
  <div className="trivia-panel">
    <h1>{props.category}</h1>
    <h3 dangerouslySetInnerHTML={{__html: props.question}} />
    <h5>{props.currentStep + 1} of {props.totalSteps}</h5>
    <button onClick={() => props.onAnswerSelect("True")}>True</button>
    <button onClick={() => props.onAnswerSelect("False")}>False</button>
  </div>
);

TriviaPanel.propTypes = {
  category: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
}

export {TriviaPanel};