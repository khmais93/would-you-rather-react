import React, { useState } from "react";
import { Form, Checkbox, Button, Progress, Segment } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserAndQuestions } from "../actions/shared";

export const Poll = (props) => {
  const [value, setValue] = useState(null);
  const dispatch = useDispatch();
  const handleChange = (e, { value }) => setValue(value);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAndQuestions(authUser, questionId, value));
  };
  const questionId = props.match.params.id;
  const question = useSelector((state) => state.questions[questionId]);
  const authUser = useSelector((state) => state.authUser);
  const users = useSelector((state) => state.users);
  const answered = Object.keys(users[authUser].answers).includes(questionId);
  return !answered ? (
    <Segment>
      <Form>
        <Form.Field>
          <b style={{ textTransform: "capitalize" }}>{question.author}</b> Asks{" "}
          <br /> <br />
          <b>Would you rather :</b>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label={question.optionOne.text}
            name="checkboxRadioGroup"
            value="optionOne"
            checked={value === "optionOne"}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label={question.optionTwo.text}
            name="checkboxRadioGroup"
            value="optionTwo"
            checked={value === "optionTwo"}
            onChange={handleChange}
          />
        </Form.Field>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Segment>
  ) : (
    <Segment>
      Results of <b>Would you rather :</b>
      <Progress
        value={question.optionOne.votes.length}
        total={
          question.optionOne.votes.length + question.optionTwo.votes.length
        }
        progress="ratio"
        success
      >
        {question.optionOne.text}
      </Progress>
      <Progress
        value={question.optionTwo.votes.length}
        total={
          question.optionOne.votes.length + question.optionTwo.votes.length
        }
        progress="ratio"
        warning
      >
        {question.optionTwo.text}
      </Progress>
    </Segment>
  );
};

export default Poll;
