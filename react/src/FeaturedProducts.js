import React from 'react';

import FeaturedProduct from './FeaturedProduct';

const FeaturedProducts = (props) => {
  const featuredProducts = props.data.map(product => (
    <FeaturedProduct {...product} key={product.id} />
  ));

  return (
    <section className="featuredproducts">
      {featuredProducts}
    </section>
  );
};

FeaturedProducts.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default FeaturedProducts;
