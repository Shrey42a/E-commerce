import React from "react";
import CartList from "./CartList";
import { Link } from "react-router-dom";

function CartPage({ cart, updateCart }) {
  
  return (
    <> 
      <div className="">
        <CartList cart={cart} updateCart={updateCart} />
      </div>
      
    </>
  );
}
export default CartPage;
