import React, { useState } from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    const newItems = [...items];
    const itemIndex = items.findIndex((ele) => ele.id === item.id);
    if (itemIndex !== -1) {
      newItems[itemIndex].quantity += item.quantity;
      setItems([...newItems]);
    } else {
      setItems([...items, item]);
    }
  };

  const removeItemFromCartHandler = (item) => {
    const newItems = [...items];
    const itemIndex = items.findIndex((ele) => ele.id === item.id);
    if (item.quantity > 1) {
      newItems[itemIndex].quantity--;
    } else {
      newItems.splice(itemIndex, 1);
    }
    setItems([...newItems]);
  };

  const ordersHandler = () => {
    setItems([]);  
  }

  const cartContext = {
    items: items,
    totalAmount: 0,
    orders: ordersHandler,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
