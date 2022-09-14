import React from "react";
import CartPage from "./CartPage";
//import EmptyCart from "./EmptyCart";

function CartPage2() {
  return (
    <>
      <div className="h-max flex flex-col top-60 items-center min-h-screen bg-neutral-100 p-4 pt-12">
        <div className="bg-white space-y-4 w-9/12 min-w-max m-4 p-2 lg:p-12">
          <CartPage />
        </div>
      </div>
    </>
  );
}
export default CartPage2;
