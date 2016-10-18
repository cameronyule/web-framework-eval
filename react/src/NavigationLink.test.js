import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import NavigationLink from './NavigationLink';

describe('NavigationLink', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NavigationLink href="#" title="Link" />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('requires an href', () => {
    console.error = jest.fn();
    const wrapper = shallow(<NavigationLink title="Link" />);
    expect(console.error).toBeCalled();
    expect(console.error.mock.calls[0][0]).toContain('href');
  });

  it('requires a title', () => {
    console.error = jest.fn();
    const wrapper = shallow(<NavigationLink href="#" />);
    expect(console.error).toBeCalled();
    expect(console.error.mock.calls[0][0]).toContain('title');
  });

  it('sets the href', () => {
    const wrapper = shallow(<NavigationLink href="#" title="Link" />);
    expect(wrapper.find('a').prop('href')).toEqual('#');
  });

  it('sets the title', () => {
    const wrapper = shallow(<NavigationLink href="#" title="Link" />);
    expect(wrapper.find('a').text()).toEqual('Link');
  });
});
