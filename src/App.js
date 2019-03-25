import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./components/signIn";
import Dashboard from "./components/dashboard/index";
import Callback from './components/callback';
import Notfound from './components/notFound';
import Auth from './Auth/auth';

const auth = new Auth(); 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignIn} />
          {!auth.isAuthenticated() ? <Route path="/dashboard" component={Dashboard} /> : <Route component={Notfound} />}
          <Route path="/callback" component={Callback} />
        </Switch>
      </div>
    );
  }
}

export default App;
