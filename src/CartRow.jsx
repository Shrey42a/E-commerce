import React from "react";

function CartRow() {
  return (
    <>
      <div className="bg-white">
        <div class="bg-slate-100 p-4 border-l border-b border-gray-200 border-r md:grid md:grid-cols-6 gap-16 sm:grid sm:grid-cols-6 lg:grid lg:grid-cols-6">
          <div class="flex border-b border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-0 justify-center">
            <img
              class="sm:top-4 md:top-4 min-w-max max-h-44 lg:h-32 lg:w-40 sm:w-24 px-1 my-1 sm:h-24 md:h-24 md:w-24"
              src="https://images.unsplash.com/photo-1662751663172-89b0c02f7505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            ></img>
          </div>
          <div class="flex grow col-span-2 font-bold border-b px-1 py-4 border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-0 justify-between">
            <h1 class="flex text-center sm:hidden lg:text-xl lg:hidden md:hidden">
              Product:
            </h1>
            <h1 class="flex text-red-500 lg:text-2xl truncate text-start">
              Black printed cofee mug
            </h1>
          </div>
          <div class="flex font-bold border-b px-1 py-4 border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-0 justify-between">
            <h1 class="flex text-center sm:hidden lg:text-xl lg:hidden md:hidden">
              Price:
            </h1>
            <h1 class="flex text-center lg:text-xl">$13</h1>
          </div>
          <div class="flex font-bold border-b py-2 px-1 border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-0 justify-between">
            <h1 class="flex text-center sm:hidden lg:text-xl lg:hidden md:hidden">
              Quantity
            </h1>
            <input class="flex text-center border border-gray-400 outline-1 w-12 h-8 rounded-sm"></input>
          </div>
          <div class="flex font-bold border-b py-4 px-1 border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-0 justify-between">
            <h1 class="flex text-center sm:hidden lg:text-xl lg:hidden md:hidden">
              Subtotal:
            </h1>
            <h1 class="flex text-center lg:text-xl">$134</h1>
            <button class="p-1 h-10 bg-red-600 text-white border shadow-zinc-700 shadow-md">
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartRow;
