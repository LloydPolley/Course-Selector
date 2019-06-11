import React from 'react';
import Nav from '../../../components/Nav/Nav';
import { shallow, mount, render } from 'enzyme';
import '../../../../setupTests';
import toJSON from 'enzyme-to-json';


test('should render nav', () => {
    const wrapper = shallow(<Nav/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

