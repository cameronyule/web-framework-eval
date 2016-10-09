import React from 'react';

import Header from './Header';
import Navigation from './Navigation';
import FeaturedProducts from './FeaturedProducts';
import Footer from './Footer';

const App = (props) =>
  (
    <div>
      <Header />
      <Navigation />
      <FeaturedProducts />
      <Footer />
    </div>
  );

export default App;
