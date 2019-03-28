import React, { Component } from "react";
import { Route, Switch, Router } from "react-router-dom";
import SignInPage from "./components/signIn";
import Dashboard from "./components/dashboard/index";
import Callback from "./components/callback";
import history from './history'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={SignInPage} />
          <Route path="/dashboard" component={Dashboard}/>}
          <Route path="/callback" component={Callback} />
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
