import React from "react";
import { useSelector } from "react-redux";
import { Image, List, Segment, Header } from "semantic-ui-react";

export const LeaderBoard = (props) => {
  const users = useSelector((state) => state.users);
  const usersId = Object.keys(users);
  const score = usersId.map((id) => {
    return users[id].questions.length + Object.keys(users[id].answers).length;
  });
  const result = {};
  usersId.forEach((key, i) => (result[key] = score[i]));
  var sortable = [];
  for (var vehicle in result) {
    sortable.push([vehicle, result[vehicle]]);
  }
  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });
  sortable = sortable.slice(0, 3);
  return (
    <Segment>
      <Header as="h3" textAlign="center" block attached="top">
        Our winners are:
      </Header>
      <br />
      <List horizontal>
        {sortable.map((user, index) => (
          <List.Item>
            <Image avatar src={users[user[0]].avatarURL} />
            <List.Content>
              <List.Header>{users[user[0]].name}</List.Header>
              Score is {user[1]} <br /> Rank: {index + 1}
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Segment>
  );
};

export default LeaderBoard;
