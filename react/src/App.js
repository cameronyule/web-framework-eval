import React from 'react';

import Header from './Header';
import Navigation from './Navigation';
import FeaturedProducts from './FeaturedProducts';
import Footer from './Footer';

const navigation = [
  {id: 1, href: '#', title: 'Coats & Jackets'},
  {id: 2, href: '#', title: 'Knitwear'},
  {id: 3, href: '#', title: 'Shirts'},
  {id: 4, href: '#', title: 'Tops'},
  {id: 5, href: '#', title: 'Trousers'}
];

const products = [
  {id: 1, href: '#', title: 'Knit Picks', description: `Versatility, quality
  and diverse design mean that in AW16’s knitwear collection, there’s a style
  to suit every man no matter his taste or need.`},
  {id: 2, href: '#', title: 'Collaborations', description: `A collection of
  products which will enable your life to be lived that little bit more
  stylishly.`},
  {id: 3, href: '#', title: 'The Green Light', description: `Don’t let your
  autumn/winter wardrobe become a uniform of black, navy and grey. For AW16
  green has received the green light.`},
  {id: 4, href: '#', title: 'Coat Tales', description: `Whether you favour a
  short jacket or a long overcoat, this season’s outerwear is a tale of two
  halves. Discover AW16’s most essential investments.`}
];

const App = () =>
  (
    <div>
      <Header />
      <Navigation data={navigation} />
      <FeaturedProducts data={products} />
      <Footer />
    </div>
  );

export default App;
