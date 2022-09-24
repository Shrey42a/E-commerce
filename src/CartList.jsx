import React from "react";
import CartRow from "./CartRow";

function CartList({ products }) {
  return (
    <>
      <div>
        {products.map(function (item) {
          return (
            <>
              <div className="gap-16 p-4 border-b border-l border-r border-gray-200 bg-slate-100 md:grid md:grid-cols-6 sm:grid sm:grid-cols-6 lg:grid lg:grid-cols-6">
                <CartRow key={item.id} {...item}></CartRow>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default CartList;
