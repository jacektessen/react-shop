import React from "react";
import InCartItem from "./InCartItem";

const Cart = () => {
  return (
    <div className="container cart">
      <div>
        <InCartItem />
        <InCartItem />
      </div>
      <div className="total">
        <p>Total: $200</p>
        <button color="info">Pay</button>
      </div>
    </div>
  );
};

export default Cart;
