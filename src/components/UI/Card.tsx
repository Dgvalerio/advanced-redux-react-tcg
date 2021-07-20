import React, { ReactNode } from 'react';

import classes from './Card.module.css';

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <section className={`${classes.card} ${className || ''}`}>{children}</section>
);

export default Card;
