import React from 'react';

import Header from './Header';
import Navigation from './Navigation';
import FeaturedProducts from './FeaturedProducts';
import Footer from './Footer';

const navigation = [
  {id: 1, href: "#", title: "Maternity Clothes"},
  {id: 2, href: "#", title: "New Arrivals"},
  {id: 3, href: "#", title: "Dresses"},
  {id: 4, href: "#", title: "Tops"},
  {id: 5, href: "#", title: "Tees"}
];

const products = [
  {id: 1, href: "#", title: "Your working week, sorted", description: "Shop 9-5 style"},
  {id: 2, href: "#", title: "Half your daily uniform", description: "Shop tops"},
  {id: 3, href: "#", title: "Let's dress this bump", description: "Shop dresses"},
  {id: 4, href: "#", title: "Layers to lean on", description: "Shop maternity essentials"}
];

const App = (props) =>
  (
    <div>
      <Header />
      <Navigation data={navigation} />
      <FeaturedProducts data={products} />
      <Footer />
    </div>
  );

export default App;
