import React from "react";

const Notfound = (props) => {
  return (
    <div id="not-found-page">
      <h1>You have to login first !</h1>
      <button onClick={props.auth.login()}> login </button>
    </div>
  );
};
export default Notfound;
