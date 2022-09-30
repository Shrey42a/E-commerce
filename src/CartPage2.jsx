import React from "react";
import CartPage from "./CartPage";

function CartPage2({ cart, updateCart }) {
  
  return (
    <>
      <div className="flex flex-col justify-center bg-fixed items-center min-h-screen p-4 pt-12 h-max top-60 bg12">
        <div className="p-2 m-4 space-y-4 lg:max-w-7xl lg:p-12">
           <CartPage cart={cart} updateCart={updateCart} />
        </div>
      </div>
    </>
  );
}
export default CartPage2;
