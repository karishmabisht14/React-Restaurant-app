import React, { useContext } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = props => {
  const cartCtx = useContext(CartContext);
  const totalAmount = (cartCtx.items.reduce((acc, current) => {
    return acc + current.price * current.quantity;
  }, 0)).toFixed(2);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} cartItem={item} onAdd={cartCtx.addItem} onRemove={cartCtx.removeItem} />
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>{`Total Amount -`}</span>
        <span>{`$${totalAmount}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
