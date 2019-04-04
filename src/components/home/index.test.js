import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeMenu from './index';

configure({ adapter: new Adapter() });

describe("<HomeMenu />", () => {
    it("should render list menu in left side/side bar", () => {
        const wrapper = mount(<Router><HomeMenu /></Router>);
        expect(wrapper.find('div.left-list-items')).toHaveLength(1);
    });
  });