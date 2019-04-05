import React from "react";
import ReactDOM from "react-dom";

import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Dashboard from "./index";
import { BrowserRouter as Router } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("<Dashboard />", () => {
  const mockAuth = {
    isAuthenticated: () => true,
    login: jest.fn()
  };

  const mockAuthFalse = {
    isAuthenticated: () => false,
    login: jest.fn()
  };

  const wrapperShallow = mount(<Dashboard auth={mockAuthFalse} />);
  it("render not found page where authenticated is false", () => {
    expect(
      wrapperShallow.containsMatchingElement(<h1>You have to login first !</h1>)
    ).toBeTruthy();
  });

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
