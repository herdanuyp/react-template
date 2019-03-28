import React from 'react';
import SignInPage from './signIn';
import {configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })
describe('<SignInPage />' , () => {
    it('Should Render Sign In Page', () => {
        const wrapper = shallow(<SignInPage />)
    })
})
