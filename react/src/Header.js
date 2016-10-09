import React from 'react';

const Header = (props) =>
  (
    <header>
      <h1>{props.title}</h1>
    </header>
  );

Header.propTypes = {
  title: React.PropTypes.string.isRequired
}

Header.defaultProps = {
  title: "Header"
}

export default Header;
