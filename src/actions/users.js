export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_ANSWERS = "UPDATE_ANSWERS";
export const UPDATE_USERS_QUESTIONS = "UPDATE_USERS_QUESTIONS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function updateUserAnsweredQuestions(authUser, qid, answer) {
  return {
    type: UPDATE_ANSWERS,
    authUser,
    qid,
    answer,
  };
}

export function updateUserQuestion(formattedQuestion) {
  return {
    type: UPDATE_USERS_QUESTIONS,
    formattedQuestion,
  };
}
