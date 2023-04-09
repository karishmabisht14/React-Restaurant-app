import React from "react";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
    const price = props.cartItem.price.toFixed(2);
    const totalAmount = (props.cartItem.quantity * price).toFixed(2);
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.cartItem.title}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.quantity}>x {props.cartItem.quantity}</span>
          <span className={classes.amount}>{`Amount - ${totalAmount}`}</span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
