import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Results extends Component {
  calculateScore = (questionsList) => {
    const totalCorrect = questionsList.filter((question) => {
      return question.correct_answer === question.answered;
    })

    return totalCorrect.length;
  }

  render() {
    const { currentStep, questionsList } = this.props;
    console.log('currentstep', currentStep);

    if(!currentStep) {
      return <Redirect exact={true} to={{ pathname: '/' }} />
    }

    return (
      <div className="results-screen">
        <h1 className="splash-title">
          Results Screen
        </h1>
        { `${this.calculateScore(questionsList)} / 10` }

        {questionsList.length && questionsList.map((question) => {
          return (
            <div key={question.question} className={question.correct_answer === question.answered ? 'answer-correct' : 'answer-wrong'}>

              <span dangerouslySetInnerHTML={{__html: question.question}} />
            </div>
          )
        })}
    
        <button onClick={this.props.onPlayAgain}>Play Again?</button>
      </div>
    )
  }
}

export {Results};