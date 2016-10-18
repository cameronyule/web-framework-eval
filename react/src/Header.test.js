import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import Header from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Header />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('has a default title', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.text()).toEqual('Header');
  });

  it('accepts a title', () => {
    const wrapper = shallow(<Header title="Hello" />);
    expect(wrapper.text()).toEqual('Hello');
  });
})
