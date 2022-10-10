import React from "react";
import { ImCross } from "react-icons/im";

function CartRow({quantity, onRemove, onChange, product, price}) {
  function handleRemove2() {
    onRemove(product.id)
  }

  function handleChange2(event) {
    onChange(product.id, +event.target.value)
  }
  return (
    <>
            <div className="mb-2 bg-gray-200 border shadow-md shadow-zinc-700">
              <button onClick={handleRemove2} className="m-6"><ImCross /></button>
          <div key={product.id} className="bg-gray-200 border-b border-l border-r border-gray-200 md:grid md:grid-cols-6 sm:grid sm:grid-cols-6 lg:grid lg:grid-cols-6">
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
                    productid={product.id}
                    onChange={handleChange2}
                    type="number"
                    value={quantity}
                    className="flex w-12 h-8 text-center border border-gray-400 rounded-sm outline-1" />
          </div>
          <div className="flex items-center justify-between px-1 py-4 font-bold border-b border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-0">
            <h1 className="flex text-center sm:hidden lg:text-xl lg:hidden md:hidden">
              Subtotal:
            </h1>
                  <h1 className="flex text-center lg:text-xl">${product.price * price}</h1>
            
          </div>
              </div>
            </div>
    </>
  );
}
export default CartRow;
