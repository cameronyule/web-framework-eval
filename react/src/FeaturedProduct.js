import React from 'react';

const FeaturedProduct = (props) => (
  <div className="featuredproduct">
    <a href={props.href}>
      <p>{props.title}</p>
      <p>{props.linktext}</p>
    </a>
  </div>
);

FeaturedProduct.propTypes = {
  href: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  linktext: React.PropTypes.string.isRequired
}

export default FeaturedProduct;
