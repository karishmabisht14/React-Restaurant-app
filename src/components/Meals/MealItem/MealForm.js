import React, { useContext } from "react";

import classes from "./MealForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

const MealForm = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemsToCart = (event) => {
    event.preventDefault();
    const quantity = parseInt(
      document.getElementById("amount" + props.id).value
    );

    cartCtx.addItem({ ...props.item, quantity: quantity });
    console.log("inside the addItemsToCart = ", cartCtx.items);
  };

  return (
    <form className={classes.form}>
      {console.log("inside the MealForm = ", cartCtx.items)}
      <Input
        input={{
          id: "amount" + props.id,
          label: "Amount",
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button onClick={addItemsToCart}>+ Add</button>
    </form>
  );
};

export default MealForm;
