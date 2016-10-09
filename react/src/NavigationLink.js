import React from 'react';

const NavigationLink = (props) =>
  (
    <li><a href={props.href}>{props.title}</a></li>
  );

NavigationLink.propTypes = {
  href: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
}

export default NavigationLink;
