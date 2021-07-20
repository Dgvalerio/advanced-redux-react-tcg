import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { IStore } from './store';
import { uiActions } from './store/ui';

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const { cartVisible: showCart } = useSelector((state: IStore) => state.ui);
  const { cart } = useSelector((state: IStore) => state);
  const { notification } = useSelector((state: IStore) => state.ui);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending',
        message: 'Sending cart data!',
      })
    );
    const sendCartData = async () => {
      const response = await fetch(
        'https://react-tcg-14-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) throw new Error('Sending cart data failed!');
    };

    sendCartData()
      .then(() =>
        dispatch(
          uiActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sending cart data successfully!',
          })
        )
      )
      .catch(() =>
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending cart data failed!',
          })
        )
      );
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
