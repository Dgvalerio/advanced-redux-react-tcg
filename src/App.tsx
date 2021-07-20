import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { IStore } from './store';
import { fetchCartData, sendCartData } from './store/cart-actions';

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const { cartVisible: showCart } = useSelector((state: IStore) => state.ui);
  const { cart } = useSelector((state: IStore) => state);
  const { notification } = useSelector((state: IStore) => state.ui);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
};

export default App;
