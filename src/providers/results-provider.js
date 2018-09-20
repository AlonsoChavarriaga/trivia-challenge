import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as quizActions from '../actions/quiz';
import { Results } from '../views/results';

class ResultsProvider extends Component {
  handlePlayAgain = () => {
    window.location = '/';
  }

  render() {
    const { currentStep, questions } = this.props;
    const { questionsList } = questions;

    return (
      <Results 
        currentStep={currentStep}
        questionsList={questionsList} 
        onPlayAgain={this.handlePlayAgain}
      />
    )
  }
}

const mapStateToProps = ({ currentStep, questions }) => ({
  currentStep,
  questions,
})

export default connect(mapStateToProps, quizActions)(ResultsProvider);