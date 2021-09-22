import { getInitialData, saveQuestionAnswer, saveQuestion } from "../utils/api";
import {
  receiveQuestions,
  updateOptions,
  addQuestion,
} from "../actions/questions";
import {
  receiveUsers,
  updateUserAnsweredQuestions,
  updateUserQuestion,
} from "../actions/users";

export function handleInitialData() {
  return async (dispatch) => {
    const { users, questions } = await getInitialData();
    dispatch(receiveQuestions(questions));
    dispatch(receiveUsers(users));
  };
}

export function updateUserAndQuestions(authUser, qid, answer) {
  return async (dispatch) => {
    await saveQuestionAnswer(authUser, qid, answer);
    dispatch(updateUserAnsweredQuestions(authUser, qid, answer));
    dispatch(updateOptions(authUser, qid, answer));
  };
}

export function addQuesion(optionOneText, optionTwoText, author) {
  return async (dispatch) => {
    const formattedQuestion = await saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    });
    console.log(formattedQuestion.optionOne.text);
    dispatch(addQuestion(formattedQuestion));
    dispatch(updateUserQuestion(formattedQuestion));
  };
}
