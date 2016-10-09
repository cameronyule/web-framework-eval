import React from 'react';

import FeaturedProduct from './FeaturedProduct';

const FeaturedProductsList = (props) => {
  const productNodes = props.data.map(function(product) {
    return (
      <FeaturedProduct key={product.id} href={product.href} title={product.title} linktext={product.linktext} />
    );
  });

  return (
    <div>
      {productNodes}
    </div>
  );
};

FeaturedProductsList.propTypes = {
  data: React.PropTypes.array.isRequired
};

export default FeaturedProductsList;
