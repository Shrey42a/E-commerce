import React from "react";
import CartRow from "./CartRow";

function CartList({ products }) {
  return (
    <>
      <div>
        {products.map(function (item) {
          return (
            <>
              <CartRow key={item.id} {...item}></CartRow>
            </>
          );
        })}
      </div>
    </>
  );
}
export default CartList;
