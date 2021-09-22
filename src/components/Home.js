import React from "react";
import { useSelector } from "react-redux";
import { Tab, Segment } from "semantic-ui-react";
import Questions from "./Questions";

const panes = (data) => {
  return [
    {
      menuItem: "Unanswered",
      render: () => (
        <Tab.Pane>
          <Questions answered={false} data={data.unasweredQuestions} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Answered",
      render: () => (
        <Tab.Pane>
          <Questions answered={true} data={data.answeredQuestions} />
        </Tab.Pane>
      ),
    },
  ];
};

const Home = (props) => {
  const questionsData = useSelector(({ authUser, questions, users }) => {
    const answeredQuestionsIds = Object.keys(users[authUser].answers);
    const unasweredQuestions = Object.values(questions).filter(
      (question) => !answeredQuestionsIds.includes(question.id)
    );
    const answeredQuestions = Object.values(questions).filter((question) =>
      answeredQuestionsIds.includes(question.id)
    );
    return {
      answeredQuestions,
      unasweredQuestions,
    };
  });
  return (
    <Segment>
      <div>
        <Tab panes={panes(questionsData)} />
      </div>
    </Segment>
  );
};

export default Home;
