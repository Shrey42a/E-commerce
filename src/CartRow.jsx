import React from "react";
import { ImCross } from "react-icons/im";

function CartRow({quantity, onRemove, product, onChange}) {
  function handleRemove() {
    onRemove(product.id);
  }

  function handleChange(event) {
    onChange(product.id, +event.target.value);
  }
  return (
    <>
            <div className="border border-t-0 border-gray-400">
              <button onClick={handleRemove} productId={product.id} className="m-6"><ImCross /></button>
          <div className="bg-transparent border-b border-gray-400 md:grid md:grid-cols-6 sm:grid sm:grid-cols-6 lg:grid lg:grid-cols-6">
          <div className="flex items-center justify-center border-b border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-none">
            <img
              className="h-40 px-1 my-1 sm:top-4 md:top-4 w-68 lg:h-48 lg:w-48 sm:w-24 sm:h-24 md:h-24 md:w-24" src={product.thumbnail}
            ></img>
          </div>
          <div className="flex items-center justify-between col-span-2 px-1 py-4 font-bold border-b border-gray-400 border-t-none grow md:border-b-0 sm:border-b-0 lg:border-b-0">
            <h1 className="flex text-center sm:hidden lg:text-xl lg:hidden md:hidden">
              Product:
            </h1>
            <h1 className="flex text-red-500 lg:text-xl text-start">
              {product.title}
            </h1>
          </div>
          <div className="flex items-center justify-between px-1 py-4 font-bold border-b border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-0">
            <h1 className="flex text-center sm:hidden lg:text-xl lg:hidden md:hidden">
              Price:
            </h1>
            <h1 className="flex text-center lg:text-xl">${product.price}</h1>
          </div>
          <div className="flex items-center justify-between px-1 py-2 font-bold border-b border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-0">
            <h1 className="flex text-center sm:hidden lg:text-xl lg:hidden md:hidden">
              Quantity
            </h1>
                  <input
                    productId={product.id}
                    onChange={handleChange}
                    type="number"
                    value={quantity}
                    className="flex w-12 h-8 text-center bg-transparent border border-gray-800 rounded-sm outline-1" />
          </div>
          <div className="flex items-center justify-between px-1 py-4 font-bold border-b border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-0">
            <h1 className="flex text-center sm:hidden lg:text-xl lg:hidden md:hidden">
              Subtotal:
            </h1>
                  <h1 className="flex text-center lg:text-xl">${product.price * quantity}</h1>  
          </div>
              </div>
            </div>
    </>
  );
}
export default CartRow;
