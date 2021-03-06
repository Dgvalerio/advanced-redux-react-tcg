import React from 'react';

import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = () => (
  <section className={classes.products}>
    <h2>Buy your favorite products</h2>
    <ul>
      <ProductItem
        title="Test"
        price={6}
        description="This is a first product - amazing!"
      />
    </ul>
  </section>
);

export default Products;
