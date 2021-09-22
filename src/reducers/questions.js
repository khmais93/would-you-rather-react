import {
  RECEIVE_QUESTIONS,
  UPDATE_OPTIONS,
  ADD_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case UPDATE_OPTIONS:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: [...state[action.qid][action.answer].votes, action.authUser],
          },
        },
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.formattedQuestion.id]: { ...action.formattedQuestion },
      };
    default:
      return state;
  }
}
