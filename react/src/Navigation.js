import React from 'react';

import NavigationLink from './NavigationLink';

const Navigation = (props) =>
  {
    const navigationNodes = props.data.map((navitem) => {
      return (
        <NavigationLink {...navitem} key={navitem.id} />
      )
    });

    return (
      <nav>
        <ul>
          {navigationNodes}
        </ul>
      </nav>
    )
  };

Navigation.propTypes = {
  data: React.PropTypes.array.isRequired
};

export default Navigation;
