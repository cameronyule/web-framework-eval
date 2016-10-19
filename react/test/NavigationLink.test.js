import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import NavigationLink from 'NavigationLink';

describe('NavigationLink', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NavigationLink href='#' title='Link' />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('requires an href', () => {
    /* eslint-disable no-console */
    console.error = jest.fn();
    shallow(<NavigationLink title='Link' />);
    expect(console.error).toBeCalled();
    expect(console.error.mock.calls[0][0]).toContain('href');
    /* eslint-enable no-console */
  });

  it('requires a title', () => {
    /* eslint-disable no-console */
    console.error = jest.fn();
    shallow(<NavigationLink href='#' />);
    expect(console.error).toBeCalled();
    expect(console.error.mock.calls[0][0]).toContain('title');
    /* eslint-enable no-console */
  });

  it('sets the href', () => {
    const wrapper = shallow(<NavigationLink href='#' title='Link' />);
    expect(wrapper.find('a').prop('href')).toEqual('#');
  });

  it('sets the title', () => {
    const wrapper = shallow(<NavigationLink href='#' title='Link' />);
    expect(wrapper.find('a').text()).toEqual('Link');
  });
});
