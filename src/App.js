import React, { Component } from "react";
import { Route, Switch, Router } from "react-router-dom";
import SignInPage from "./components/signIn/signIn";
import Dashboard from "./components/dashboard/index";
import Callback from "./components/callback";
import history from "./history";
import Auth from "./Auth/auth";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={props => <SignInPage auth={auth} {...props} />}
            />
            <Route
              path="/dashboard"
              render={props => <Dashboard auth={auth} {...props} />}
            />
            <Route
              path="/callback"
              render={props => {
                handleAuthentication(props);
                return <Callback {...props} />;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
