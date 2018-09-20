import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {TriviaPanel} from './trivia-panel';

class Quiz extends Component {
  sendToResults = () => {
    window.location = '/results';
  }

  render() {
    const { currentStep, questions } = this.props;
    const { questionsList } = questions;

    if(currentStep > 9) {
      return <Redirect exact={true} to={{ pathname: '/results' }} />
    }

    return (
      <div className="quiz-screen">
        <TriviaPanel
          currentStep={currentStep}
          totalSteps={10}
          onAnswerSelect={this.handleAnswerSelect}
          { ...this.props }
          { ...questionsList[currentStep] }
        />
      </div>
    )
  }
}


TriviaPanel.propTypes = {
  questions: PropTypes.object,
}

export {Quiz};