import React from "react";
import { useState } from "react";
import { setAuthUser } from "../actions/authUser";
import { useDispatch, useSelector } from "react-redux";
import {
  Dropdown,
  Dimmer,
  Loader,
  Form,
  Segment,
  Header,
  Image,
} from "semantic-ui-react";

const Login = (props) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const userOptions = () => {
    return Object.values(users).map((user) => {
      return {
        key: user.id,
        text: user.name,
        value: user.id,
        image: { avatar: true, src: user.avatarURL },
      };
    });
  };
  const changeHandler = (e, data) => {
    e.preventDefault();
    setUser(data.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    new Promise((res, rej) => {
      setLoading(true);
      setTimeout(() => res(), 500);
    }).then(() => dispatch(setAuthUser(user)));
  };
  const disabled = user === "" ? true : false;

  return (
    <Segment>
      <Header as="h4" block attached="top" textAlign="center">
        <Header.Content>Welcome to the Would You Rather App!</Header.Content>
        <Header.Subheader>Please sign in to continue</Header.Subheader>
      </Header>
      {loading === true && (
        <Dimmer active inverted>
          <Loader inverted content="Loading" />
        </Dimmer>
      )}
      <br />
      <Image
        src="https://www.bravo.de/assets/field/image/pikachu_bts.jpg"
        size="medium"
        centered
      />
      <br />
      <Form onSubmit={submitHandler}>
        <Dropdown
          placeholder="Select Friend"
          fluid
          selection
          options={userOptions()}
          onChange={changeHandler}
          value={user}
        />
        <br />
        <Form.Button content="Login" positive disabled={disabled} fluid />
      </Form>
    </Segment>
  );
};

export default Login;
