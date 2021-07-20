import React from 'react';
import { useDispatch } from 'react-redux';

import { ICartItem } from '../../interfaces';
import { cartActions } from '../../store/cart';
import classes from './CartItem.module.css';

const CartItem = ({ item }: { item: ICartItem }) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price } = item;

  const addOneHandler = () => dispatch(cartActions.addToCart(item));

  const removeOneHandler = () => dispatch(cartActions.removeFromCart(item));

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={removeOneHandler}>
            -
          </button>
          <button type="button" onClick={addOneHandler}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
