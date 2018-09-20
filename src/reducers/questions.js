import { 
  QUESTIONS_FETCHING, 
  QUESTIONS_RECEIVED,
  RECORD_ANSWER 
} from '../action-list';

const initialState = {
  questionsList: [],
  isLoading: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case QUESTIONS_FETCHING:
      return { 
        ...state, 
        isLoading: true 
      };

    case QUESTIONS_RECEIVED:
      return { 
        ...state, 
        questionsList: action.payload, 
        isLoading: false 
      };
      
    case RECORD_ANSWER:
      const questions = [...state.questionsList];
      questions[action.currentStep].answered = action.payload;

      return {
        ...state,
        questionsList: questions
      }
    default:
      return state;
  }
}