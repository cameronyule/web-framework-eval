import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import FeaturedProducts from 'FeaturedProducts';
import FeaturedProduct from 'FeaturedProduct';

describe('FeaturedProducts', () => {
  let products;

  beforeEach(() => {
    products = [
      {id: 1, href: '#', title: 'Knit Picks', description: `Versatility, quality
      and diverse design mean that in AW16’s knitwear collection, there’s a style
      to suit every man no matter his taste or need.`},
      {id: 2, href: '#', title: 'Collaborations', description: `A collection of
      products which will enable your life to be lived that little bit more
      stylishly.`},
      {id: 3, href: '#', title: 'The Green Light', description: `Don’t let your
      autumn/winter wardrobe become a uniform of black, navy and grey. For AW16
      green has received the green light.`},
      {id: 4, href: '#', title: 'Coat Tales', description: `Whether you favour a
      short jacket or a long overcoat, this season’s outerwear is a tale of two
      halves. Discover AW16’s most essential investments.`}
    ];
  });

  it('renders correctly', () => {
    const wrapper = shallow(<FeaturedProducts data={products} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('requires an array of product data', () => {
    expect(() => {
      /* eslint-disable no-console */
      console.error = jest.fn();
      shallow(<FeaturedProducts />);
      expect(console.error).toBeCalled();
      expect(console.error.mock.calls[0][0]).toContain('data');
      /* eslint-enable no-console */
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
