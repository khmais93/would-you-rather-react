import React, { useState } from "react";
import {
  Button,
  Form,
  Segment,
  Loader,
  Dimmer,
  Header,
} from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { addQuesion } from "../actions/shared";
import { Redirect } from "react-router-dom";

export const NewPoll = (props) => {
  const dispatch = useDispatch();
  const author = useSelector((state) => state.authUser);
  const [optionOneText, setOptionOne] = useState("");
  const [optionTwoText, setOptionTwo] = useState("");
  const [validSubmit, setValidSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChangeOne = (e) => {
    setOptionOne(e.target.value);
  };
  const handleChangeTwo = (e) => {
    setOptionTwo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    new Promise((res, rej) => {
      setLoading(true);
      dispatch(addQuesion(optionOneText, optionTwoText, author));
      setTimeout(() => res("success"), 1000);
    }).then(() => {
      setOptionTwo("");
      setOptionOne("");
      setValidSubmit(true);
    });
  };

  const disabled = optionOneText !== "" && optionTwoText !== "" ? false : true;
  if (validSubmit === true) {
    return <Redirect to="/" />;
  }
  return (
    <Segment>
      <Header as="h3" textAlign="left" block attached="top">
        Create a New Poll
      </Header>
      {loading === true && (
        <Dimmer active inverted>
          <Loader inverted content="Loading" />
        </Dimmer>
      )}
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Would you rather</label>
          <input
            placeholder="Enter option one"
            value={optionOneText}
            onChange={handleChangeOne}
          />
        </Form.Field>
        <Form.Field>
          <label>Or</label>
          <input
            placeholder="Enter option two"
            value={optionTwoText}
            onChange={handleChangeTwo}
          />
        </Form.Field>
        <Button disabled={disabled} type="submit" fluid>
          Submit
        </Button>
      </Form>
    </Segment>
  );
};

export default NewPoll;
