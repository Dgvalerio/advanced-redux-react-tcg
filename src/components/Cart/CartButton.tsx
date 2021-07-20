import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IStore } from '../../store';
import { cartActions } from '../../store/cart';
import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();

  const handleToggleCart = () => dispatch(cartActions.toggleCart());

  // Se for por tipo de item
  // const { length: quantity } = useSelector((state: IStore) => state.cart.items);

  // Se for items independentemente do tipo
  const { items } = useSelector((state: IStore) => state.cart);
  const quantity = items.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );

  return (
    <button type="button" className={classes.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
