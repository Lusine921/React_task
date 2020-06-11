import React from "react";
import Button from "@material-ui/core/Button";
import { AddShoppingCart } from "@material-ui/icons";

export default function ProductButton(props) {
  console.log(props.onClickButton);
  return (
    <Button
      onClick={() => props.onClickButton(props.id)}
      variant="contained"
      color="secondary"
    >
      Cart <AddShoppingCart />
    </Button>
  );
}
