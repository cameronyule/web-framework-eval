import React from 'react';

import FeaturedProduct from './FeaturedProduct';

const FeaturedProducts = (props) =>
  {
    const featuredProducts = props.data.map((product) => {
      return (
        <FeaturedProduct {...product} key={product.id} />
      )
    });

    return (
      <section className='featuredproducts'>
        {featuredProducts}
      </section>
    )
  };

FeaturedProducts.propTypes = {
  data: React.PropTypes.array.isRequired
};

export default FeaturedProducts;
