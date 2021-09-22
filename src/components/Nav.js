import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Menu, Image, Button } from "semantic-ui-react";
import { setAuthUser } from "../actions/authUser";

const Nav = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const authUser = useSelector((state) => state.authUser);
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(setAuthUser(null));
    history.push(`/`);
  };

  return (
    <Menu>
      <Menu.Item header>Would You Rather</Menu.Item>
      <Menu.Item as={NavLink} to="/" name="home" exact />
      <Menu.Item as={NavLink} to="/add" name="newPoll" />
      <Menu.Item as={NavLink} to="/top" name="leaderPoll" />
      <Menu.Menu position="right">
        <Menu.Item>
          <span>
            <Image src={users[authUser].avatarURL} avatar spaced="right" />
            {users[authUser].name}
          </span>
        </Menu.Item>
        <Menu.Item>
          <Button
            content="Logout"
            labelPosition="right"
            basic
            compact
            icon="log out"
            size="mini"
            onClick={handleLogout}
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Nav;
