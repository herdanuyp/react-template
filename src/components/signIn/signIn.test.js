import React from "react";
import SignInPage from "./signIn";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createShallow } from "@material-ui/core/test-utils";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

configure({ adapter: new Adapter() });

describe("<SignInPage />", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
  });

  it("should render WithStyles(Paper)", () => {
    const wrapper = shallow(<SignInPage />);
    expect(wrapper.find(Paper)).toHaveLength(1);
  });

  it("should render WithStyles(Button)", () => {
    const wrapper = shallow(<SignInPage />);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  const mockCallBack = jest.fn();
  it("Test click event", () => {
    const wrapper = shallow(<Button
      variant="contained"
      color="secondary"
      onClick={mockCallBack}
    >
      Sign In
    </Button>);
    wrapper.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
