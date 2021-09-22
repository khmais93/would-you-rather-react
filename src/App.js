import { useEffect, Fragment } from "react";
import { handleInitialData } from "./actions/shared";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Poll from "./components/Poll";
import LeaderBoard from "./components/LeaderBoard";
import NewPoll from "./components/NewPoll";
import NoMatch from "./components/NoMatch";

// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser);
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        {authUser === null ? (
          <Route
            render={() => (
              <ContentGrid>
                <Login />
              </ContentGrid>
            )}
          />
        ) : (
          <Fragment>
            <Nav />
            <ContentGrid>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/questions/:id" component={Poll} />
                <Route path="/add" component={NewPoll} />
                <Route path="/top" component={LeaderBoard} />
                <Route component={NoMatch} />
              </Switch>
            </ContentGrid>
          </Fragment>
        )}
      </div>
      <footer className="footer">
        Project maintained by{" "}
        <a href="mailto: khmais.mrad@gmail/com">Khmais Mrad</a>
      </footer>
    </Router>
  );
}

const ContentGrid = ({ children }) => (
  <Grid padded="vertically" columns={1} centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 550 }}>{children}</Grid.Column>
    </Grid.Row>
  </Grid>
);

export default App;
