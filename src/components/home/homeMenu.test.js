import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router } from "react-router-dom";
import HomeMenu from "./index";

configure({ adapter: new Adapter() });

describe("<HomeMenu />", () => {
  const wrapper = mount(
    <Router>
      <HomeMenu />
    </Router>
  );

  it("should render list menu in left side/side bar", () => {
    expect(wrapper.find("div.left-list-items")).toHaveLength(1);
  });

  it("should render list menu in right side", () => {
    expect(wrapper.find("div.right-list-items")).toHaveLength(1);
  });

  it("should render list menu in right side", () => {
    expect(wrapper.find("div.round-list-items")).toHaveLength(1);
  });
});
