import React from 'react';

import NavigationLink from './NavigationLink';

export default class Navigation extends React.Component {
  constructor() {
    super();

    this.state = {data: [
      {id: 1, href: "#", title: "Maternity Clothes"},
      {id: 2, href: "#", title: "New Arrivals"},
      {id: 3, href: "#", title: "Dresses"},
      {id: 4, href: "#", title: "Tops"},
      {id: 5, href: "#", title: "Tees"}
    ]};
  }

  render() {
    const navigationNodes = this.state.data.map(function(navitem) {
      return (
        <NavigationLink key={navitem.id} href={navitem.href} title={navitem.title} />
      )
    });

    return (
      <nav>
        <ul>
          {navigationNodes}
        </ul>
      </nav>
    )
  }
}
