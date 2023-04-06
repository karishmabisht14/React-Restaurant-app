import React from "react";

import classes from "./MealForm.module.css";
import Input from "../../UI/Input";

const MealForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        input={{
          label: "Amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealForm;
