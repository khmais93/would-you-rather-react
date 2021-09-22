import {
  RECEIVE_USERS,
  UPDATE_ANSWERS,
  UPDATE_USERS_QUESTIONS,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case UPDATE_ANSWERS:
      return {
        ...state,
        [action.authUser]: {
          ...state[action.authUser],
          answers: {
            ...state[action.authUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    case UPDATE_USERS_QUESTIONS:
      return {
        ...state,
        [action.formattedQuestion.author]: {
          ...state[action.formattedQuestion.author],
          questions: [
            ...state[action.formattedQuestion.author].questions,
            action.formattedQuestion.id,
          ],
        },
      };
    default:
      return state;
  }
}
