import React from "react";
import ReactDOM from "react-dom";

import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Dashboard from "./index";
import { BrowserRouter as Router } from "react-router-dom";
// import Auth from '../../Auth/auth';

// const auth = new Auth();

configure({ adapter: new Adapter() });

describe("<Dashboard />", () => {
  var mockAuth = {
    isAuthenticated: () => true,
    login: jest.fn()
  };

  const wrapper = mount(
    <Router>
      <Dashboard auth={mockAuth} />
    </Router>
  );

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  
});
