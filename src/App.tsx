import React from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { IStore } from './interfaces';

const App = () => {
  const { visible: showCart } = useSelector((state: IStore) => state.cart);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
};

export default App;
