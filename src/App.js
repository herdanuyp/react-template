import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./components/signIn";
import Dashboard from "./components/dashboard/index";
import Callback from "./components/callback";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/dashboard" component={Dashboard}/>}
          <Route path="/callback" component={Callback} />
        </Switch>
      </div>
    );
  }
}

export default App;
