import React from "react";
import CartRow from "./CartRow";

function CartList({ cart, updateCart }) {
  

  return (
    <>
      <div className="">
      <CartRow cart={cart} updateCart={updateCart}></CartRow></div>
    </>  
  );
}
export default CartList;
