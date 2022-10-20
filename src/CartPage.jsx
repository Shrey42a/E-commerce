import React from "react";
import CartList from "./CartList";

function CartPage() {
  return (
    <> 
      <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-12 bg-fixed h-max top-60 gradient4">
        <div className="p-2 m-4 lg:max-w-7xl lg:p-12">
           <CartList />
        </div>
      </div>
    </>
  );
}
export default (CartPage);
