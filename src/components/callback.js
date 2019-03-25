import React from "react";
import Auth from "../Auth/auth";

class Callback extends React.Component {
  componentDidMount(){
    const auth = new Auth();
    auth.handleAuthentication();
  }
  render() {
    return (
      <div id="callback">
        <p>Loading...</p>
      </div>
    );
  }
}

export default Callback;
