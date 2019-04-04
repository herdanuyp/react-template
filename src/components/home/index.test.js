import React from 'react';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import { createShallow } from "@material-ui/core/test-utils";
import HomeMenu from './index';

configure({ adapter: new Adapter() });

describe("<HomeMenu />", () => {
    let shallow;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
  });

    it("should render list menu in left side/side bar", () => {
        const wrapper = shallow(<Router><HomeMenu /></Router>);
        const deeperWrapper = wrapper.find(HomeMenu).dive().dive();
        expect(deeperWrapper.find('div.left-list-items')).toHaveLength(1);
    });
  });