import React from 'react';

import FeaturedProductsList from './FeaturedProductsList';

export default class FeaturedProducts extends React.Component {
  constructor() {
    super();

    this.state = {data: [
      {id: 1, href: "#", title: "Your working week, sorted", linktext: "Shop 9-5 style"},
      {id: 2, href: "#", title: "Half your daily uniform", linktext: "Shop tops"},
      {id: 3, href: "#", title: "Let's dress this bump", linktext: "Shop dresses"},
      {id: 4, href: "#", title: "Layers to lean on", linktext: "Shop maternity essentials"}
    ]};
  }

  render() {
    return (
      <section className="featuredproducts">
        <FeaturedProductsList data={this.state.data} />
      </section>
    )
  }
}
