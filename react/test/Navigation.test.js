import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import Navigation from 'Navigation';
import NavigationLink from 'NavigationLink';

describe('Navigation', () => {
  let links;

  beforeEach(() => {
    links = [
      {id: 1, href: '#', title: 'Maternity Clothes'},
      {id: 2, href: '#', title: 'New Arrivals'},
      {id: 3, href: '#', title: 'Dresses'},
      {id: 4, href: '#', title: 'Tops'},
      {id: 5, href: '#', title: 'Tees'}
    ];
  });

  it('renders correctly', () => {
    const wrapper = shallow(<Navigation data={links} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('requires an array of navigation link data', () => {
    expect(() => {
      console.error = jest.fn();
      const wrapper = shallow(<Navigation />);
      expect(console.error).toBeCalled();
      expect(console.error.mock.calls[0][0]).toContain('data');
    }).toThrow();
  });

  it('creates a NavigationLink per item', () => {
    const wrapper = shallow(<Navigation data={links} />);
    expect(wrapper.find(NavigationLink).length).toEqual(5);
  });

  it('uses the order defined in the input data array', () => {
    const wrapper = shallow(<Navigation data={links} />);
    const linksWrapper = wrapper.find(NavigationLink);

    const ids = links.map((o) => { return o.id; });
    const linkIDs = linksWrapper.map((l) => { return parseInt(l.key()); })

    expect(linkIDs).toEqual(ids);
  });
});
