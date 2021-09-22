export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const UPDATE_OPTIONS = "UPDATE_OPTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function updateOptions(authUser, qid, answer) {
  return {
    type: UPDATE_OPTIONS,
    authUser,
    qid,
    answer,
  };
}

export function addQuestion(formattedQuestion) {
  return {
    type: ADD_QUESTION,
    formattedQuestion,
  };
}
