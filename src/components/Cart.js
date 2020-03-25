import React from "react";
import InCartItem from "./InCartItem";
import { Button } from "reactstrap";

const Cart = () => {
  return (
    <div className="container cart">
      <div>
        <InCartItem />
        <InCartItem />
      </div>
      <div className="total">
        <p>Total: $200</p>
        <Button color="info">Pay</Button>
      </div>
    </div>
  );
};

export default Cart;
