import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { IStore } from './store';

const App = () => {
  const { cartVisible: showCart } = useSelector((state: IStore) => state.ui);
  const { cart } = useSelector((state: IStore) => state);

  useEffect(() => {
    fetch('https://react-tcg-14-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
};

export default App;
