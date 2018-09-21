import PropTypes from 'prop-types';
import React from 'react';

const TriviaPanel = (props) => (
  <div className="trivia-panel">
    <h1 className="question-category">{props.category}</h1>
    <div className="question-card">
      <span className="question-text" dangerouslySetInnerHTML={{__html: props.question}} />
    </div>
    <span className="question-count">
      Question <b>{props.currentStep + 1}</b> of <b>{props.totalSteps}</b>
    </span>
    <div className="buttons-wrapper">
      <button 
        className="button button-true" 
        onClick={() => props.onAnswerSelect("True")}>
        True
      </button>
      <button 
        className="button button-false" 
        onClick={() => props.onAnswerSelect("False")}>
        False
      </button>
    </div>
  </div>
);

TriviaPanel.propTypes = {
  category: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
}

export {TriviaPanel};