import React, { memo } from "react";
import CartPage from "./CartPage";
//import EmptyCart from "./EmptyCart";

function CartPage2() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen p-4 pt-12 h-max top-60 bg-neutral-100">
        <div className="w-9/12 p-2 m-4 space-y-4 bg-white min-w-max lg:p-12">
          <CartPage />
        </div>
      </div>
    </>
  );
}
const BetterCartPage2 = memo(CartPage2);
export default BetterCartPage2;
