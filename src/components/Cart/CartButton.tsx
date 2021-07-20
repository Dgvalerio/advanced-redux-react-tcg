import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IStore } from '../../store';
import { uiActions } from '../../store/ui';
import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();

  const handleToggleCart = () => dispatch(uiActions.toggleCartVisible());

  const { totalQuantity } = useSelector((state: IStore) => state.cart);

  return (
    <button type="button" className={classes.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
