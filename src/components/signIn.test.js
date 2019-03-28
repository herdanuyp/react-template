import React from "react";
import SignInPage from "./signIn";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createShallow, mount } from "@material-ui/core/test-utils";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

configure({ adapter: new Adapter() });

describe("<SignInPage />", () => {
  let shallow;
  
  beforeAll(() => {
    shallow = createShallow({ dive: true });
  });

  it("Should Render Sign In Page", () => {
    const wrapper = shallow(<SignInPage />);
    console.log(wrapper.debug());
  });

  it("should render WithStyles(Paper)", () => {
    const wrapper = shallow(<SignInPage />);
    expect(wrapper.find(Paper)).toHaveLength(1);
  });

  it("should render WithStyles(Button)", () => {
    const wrapper = shallow(<SignInPage />);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

//   it('should be clicked', () => {
//     const wrapper = shallow(<SignInPage />);
//     console.log(wrapper.find(Button).simulate('click'))
//   })
});
