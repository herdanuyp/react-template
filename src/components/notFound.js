import React from "react";
import Auth from "../Auth/auth";

const auth = new Auth();

const Notfound = () => {
  return (
    <div id="not-found-page">
      <h1>You have to login first !</h1>
      <button onClick={auth.login}> login </button>
    </div>
  );
};
export default Notfound;
