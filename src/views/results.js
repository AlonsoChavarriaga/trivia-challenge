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

    if(!currentStep) {
      return <Redirect exact={true} to={{ pathname: '/' }} />
    }

    return (
      <div className="container results-screen">
        <h1 className="results-title">
          You Scored: <br/> { `${this.calculateScore(questionsList)} / 10` }
        </h1>

        <div className="results-card">
          {questionsList.length && questionsList.map((question) => {
            return (
              <div 
                key={ question.question } 
                className={ question.correct_answer === question.answered 
                ? 'answer-correct' 
                : 'answer-wrong'}
              >
                { question.correct_answer === question.answered 
                  ? (<i className="fas fa-times fa-fw" />)
                  : (<i className="fas fa-check fa-fw" />)
                }
                <span dangerouslySetInnerHTML={{__html: question.question}} /><br/>
                <span>You answered: </span>
                <span className="answer">{ question.answered }</span>
              </div>
            )
          })}
        </div>
        <div className="restart-quiz-wrapper">
          <button 
            className="button begin-quiz" 
            onClick={this.props.onPlayAgain}
          >
            Play Again?
          </button>
        </div>
      </div>
    )
  }
}

export {Results};