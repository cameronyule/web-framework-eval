import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import FeaturedProduct from 'FeaturedProduct';

describe('FeaturedProduct', () => {
  let validElement;

  beforeEach(() => {
    validElement = <FeaturedProduct href='#'
                                    title='Test'
                                    description='A Test' />;
  })

  it('renders correctly', () => {
    const wrapper = shallow(validElement);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('has a valid class', () => {
    const wrapper = shallow(validElement);
     expect(wrapper.at(0).prop('className')).toEqual('featuredproduct');
  });

  it('requires an href', () => {
    /* eslint-disable no-console */
    console.error = jest.fn();
    shallow(<FeaturedProduct title='Test'
                             description='A Test' />);
    expect(console.error).toBeCalled();
    expect(console.error.mock.calls[0][0]).toContain('href');
    /* eslint-enable no-console */
  });

  it('accepts an href', () => {
    const wrapper = shallow(validElement);
    expect(wrapper.find('a').prop('href')).toEqual('#');
  });

  it('requires a title', () => {
    /* eslint-disable no-console */
    console.error = jest.fn();
    shallow(<FeaturedProduct href='#'
                             description='A Test' />);
    expect(console.error).toBeCalled();
    expect(console.error.mock.calls[0][0]).toContain('title');
    /* eslint-enable no-console */
  });

  it('accepts a title', () => {
    const wrapper = shallow(validElement);
    expect(wrapper.find('p').first().text()).toEqual('Test');
  });

  it('requires a description', () => {
    /* eslint-disable no-console */
    console.error = jest.fn();
    shallow(<FeaturedProduct href='#'
                             title='Test' />);
    expect(console.error).toBeCalled();
    expect(console.error.mock.calls[0][0]).toContain('description');
    /* eslint-enable no-console */
  });

  it('accepts a description', () => {
    const wrapper = shallow(validElement);
    expect(wrapper.find('p').at(1).text()).toEqual('A Test');
  });
})
