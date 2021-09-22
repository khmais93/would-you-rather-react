/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";
import { Button, Image, List } from "semantic-ui-react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

export const Questions = (props) => {
  const users = useSelector((state) => state.users);
  // const history = useHistory();
  // const handleOnSubmit = () => {
  //   history.push(`/questions`);
  // };
  return (
    <List celled>
      {props.data.map((question) => (
        <List.Item key={question.id}>
          <List.Content floated="right">
            {props.answered ? (
              <Button as={Link} to={`/questions/${question.id}`} color="blue">
                Results
              </Button>
            ) : (
              <Button as={Link} to={`/questions/${question.id}`} positive>
                Answer
              </Button>
            )}
          </List.Content>
          <Image avatar src={users[question.author].avatarURL} />
          <List.Content>
            <List.Header>
              Question asked by {question.author.toUpperCase()}
            </List.Header>
            <List.Description>
              Would you rather <br />
              <a>
                <b>{question.optionOne.text}</b>
              </a>{" "}
              <br />
              or ...
            </List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

export default Questions;
