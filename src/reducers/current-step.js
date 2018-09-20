import { SET_CURRENT_STEP } from '../action-list';

export default function(state = 0, action) {
  switch (action.type) {
    case SET_CURRENT_STEP:
      return action.payload;

    default:
      return state;
  }
}