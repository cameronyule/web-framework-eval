import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import FeaturedProducts from 'FeaturedProducts';
import FeaturedProduct from 'FeaturedProduct';

describe('FeaturedProducts', () => {
  let products;

  beforeEach(() => {
    products = [
      {id: 1, href: "#", title: "Your working week, sorted", description: "Shop 9-5 style"},
      {id: 2, href: "#", title: "Half your daily uniform", description: "Shop tops"},
      {id: 3, href: "#", title: "Let's dress this bump", description: "Shop dresses"},
      {id: 4, href: "#", title: "Layers to lean on", description: "Shop maternity essentials"}
    ];
  });

  it('renders correctly', () => {
    const wrapper = shallow(<FeaturedProducts data={products} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('requires an array of product data', () => {
    expect(() => {
      console.error = jest.fn();
      const wrapper = shallow(<FeaturedProducts />);
      expect(console.error).toBeCalled();
      expect(console.error.mock.calls[0][0]).toContain('data');
    }).toThrow();
  });

  it('creates a featured product per item', () => {
    const wrapper = shallow(<FeaturedProducts data={products} />);
    expect(wrapper.find(FeaturedProduct).length).toEqual(4);
  });

  it('uses the order defined in the input data array', () => {
    const wrapper = shallow(<FeaturedProducts data={products} />);
    const productsWrapper = wrapper.find(FeaturedProduct);

    const ids = products.map((o) => { return o.id; });
    const productIDs = productsWrapper.map((l) => { return parseInt(l.key()); })

    expect(productIDs).toEqual(ids);
  });
})
