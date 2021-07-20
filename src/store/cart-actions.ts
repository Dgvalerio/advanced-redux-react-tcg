import { cartActions, ICartState } from './cart';
import { uiActions } from './ui';

export const sendCartData = (cart: ICartState) => async (dispatch: any) => {
  dispatch(
    uiActions.showNotification({
      status: 'pending',
      title: 'Sending',
      message: 'Sending cart data!',
    })
  );

  const sendRequest = async () => {
    const response = await fetch(
      'https://react-tcg-14-default-rtdb.firebaseio.com/cart.json',
      {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      }
    );

    if (!response.ok) throw new Error('Sending cart data failed!');
  };

  try {
    await sendRequest();
    dispatch(
      uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sending cart data successfully!',
      })
    );
  } catch {
    dispatch(
      uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
      })
    );
  }
};

export const fetchCartData = () => async (dispatch: any) => {
  const fetchData = async () => {
    const response = await fetch(
      'https://react-tcg-14-default-rtdb.firebaseio.com/cart.json'
    );

    if (!response.ok) throw new Error('Could not fetch cart data!');

    const data = await response.json();

    return data;
  };

  try {
    const cartData = await fetchData();

    dispatch(
      cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity || 0,
        changed: false,
      })
    );
  } catch {
    dispatch(
      uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Fetching cart data failed!',
      })
    );
  }
};
