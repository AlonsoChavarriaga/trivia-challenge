import { combineReducers } from 'redux';
import currentStep from './current-step';
import questions from './questions';

const appReducers = combineReducers({
  currentStep,
  questions
});

export default function(state, action) {
  return appReducers(state, action);
}