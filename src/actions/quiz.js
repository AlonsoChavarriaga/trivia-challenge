import axios from 'axios';
import { 
  QUESTIONS_FETCHING, 
  QUESTIONS_RECEIVED, 
  RECORD_ANSWER,
  SET_CURRENT_STEP,
} from '../action-list';

export const fetchQuestions = () => {
  const url = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

  return (dispatch) => {
    dispatch({ type: QUESTIONS_FETCHING });

    axios.get(url)
      .then((response) => {
        dispatch({
          type: QUESTIONS_RECEIVED,
          payload: response.data.results
        })
      })
  }
}

export const setCurrentStep = (newStep) => {
  return (dispatch) => {
    dispatch({
      type: SET_CURRENT_STEP,
      payload: newStep,
    })
  }
}

export const recordAnswer = (currentStep, selectedAnswer) => {
  return (dispatch) => {
    dispatch(setCurrentStep(currentStep + 1));
    dispatch({
      type: RECORD_ANSWER,
      payload: selectedAnswer,
      currentStep,
    });
  }
}