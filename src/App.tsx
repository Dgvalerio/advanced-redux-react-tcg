import React from 'react';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

const App = () => (
  <Layout>
    <Cart />
    <Products />
  </Layout>
);

export default App;
