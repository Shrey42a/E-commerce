import React from "react";

function CartRow({ thumbnail, title, price, id }) {
  return (
    <>
      <div className="bg-white">
        <div className="gap-16 p-4 border-b border-l border-r border-gray-200 bg-slate-100 md:grid md:grid-cols-6 sm:grid sm:grid-cols-6 lg:grid lg:grid-cols-6">
          <div className="flex justify-center border-b border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-0">
            <img
              className="px-1 my-1 sm:top-4 md:top-4 min-w-max max-h-44 lg:h-32 lg:w-40 sm:w-24 sm:h-24 md:h-24 md:w-24"
              src={thumbnail}
            ></img>
          </div>
          <div className="flex justify-between col-span-2 px-1 py-4 font-bold border-b border-gray-400 grow md:border-b-0 sm:border-b-0 lg:border-b-0">
            <h1 className="flex text-center sm:hidden lg:text-xl lg:hidden md:hidden">
              Product:
            </h1>
            <h1 className="flex text-red-500 truncate lg:text-2xl text-start">
              {title}
            </h1>
          </div>
          <div className="flex justify-between px-1 py-4 font-bold border-b border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-0">
            <h1 className="flex text-center sm:hidden lg:text-xl lg:hidden md:hidden">
              Price:
            </h1>
            <h1 className="flex text-center lg:text-xl">{price}</h1>
          </div>
          <div className="flex justify-between px-1 py-2 font-bold border-b border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-0">
            <h1 className="flex text-center sm:hidden lg:text-xl lg:hidden md:hidden">
              Quantity
            </h1>
            <input className="flex w-12 h-8 text-center border border-gray-400 rounded-sm outline-1"></input>
          </div>
          <div className="flex justify-between px-1 py-4 font-bold border-b border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-0">
            <h1 className="flex text-center sm:hidden lg:text-xl lg:hidden md:hidden">
              Subtotal:
            </h1>
            <h1 className="flex text-center lg:text-xl">$134</h1>
            <button className="h-10 p-1 text-white bg-red-600 border shadow-md shadow-zinc-700">
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartRow;
