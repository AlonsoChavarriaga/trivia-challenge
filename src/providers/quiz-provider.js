import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as quizActions from '../actions/quiz';
import { Quiz } from '../views/quiz';

class QuizProvider extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  handleAnswerSelect = (selectedAnswer) => {
    const { currentStep } = this.props;
    this.props.recordAnswer(currentStep, selectedAnswer);
  }

  render() {
    const { currentStep, questions } = this.props;
    return (
      <Quiz 
        currentStep={currentStep} 
        questions={questions} 
        onAnswerSelect={this.handleAnswerSelect}
      />
    )
  }
}

const mapStateToProps = ({ currentStep, questions }) => ({
  currentStep,
  questions,
})

export default connect(mapStateToProps, quizActions)(QuizProvider);