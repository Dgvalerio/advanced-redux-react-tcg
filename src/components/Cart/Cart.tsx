import React from 'react';
import { useSelector } from 'react-redux';

import { IStore } from '../../store';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const { items } = useSelector((state: IStore) => state.cart);

  const renderItems =
    items.length > 0 ? (
      items.map((item) => <CartItem key={item.title} item={item} />)
    ) : (
      <li>No items.</li>
    );

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{renderItems}</ul>
    </Card>
  );
};

export default Cart;
