import React, { Component } from "react";
import { Route, Switch, Router } from "react-router-dom";
import SignInPage from "./components/signIn";
import Dashboard from "./components/dashboard/index";
import Callback from "./components/callback";
import history from './history';
import Auth from './Auth/auth';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {
  // componentDidMount() {
  //   const { renewSession } = auth;

  //   if (localStorage.getItem('isLoggedIn') === 'true') {
  //     renewSession();
  //   }
  // }
  render() {
    return (
      <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={(props) => <SignInPage auth={auth} {...props} /> } />
          <Route path="/dashboard" render={(props) => <Dashboard auth={auth} {...props} />}/>
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />  
          }} />
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
