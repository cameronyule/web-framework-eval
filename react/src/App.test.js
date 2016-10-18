import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import App from './App.js';
import Header from './Header';
import Navigation from './Navigation';
import FeaturedProducts from './FeaturedProducts';
import Footer from './Footer';

describe('App', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it ('has a header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toEqual(1);
  });

  it ('has a navigation component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Navigation).length).toEqual(1);
  });

  it ('has a featured products component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(FeaturedProducts).length).toEqual(1);
  });

  it ('has a footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toEqual(1);
  });
})
