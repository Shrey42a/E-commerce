import React from "react";
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <>
      <div class="m-4">
        <div class="lg:grid border-t font-bold text-gray-700 lg:grid-cols-6 hidden justify-around text-xl bg-slate-100 border p-5">
          <div></div>
          <div></div>
          <div class="-ml-20">Product</div>
          <div class="ml-7  grow flex">Price</div>
          <div class="ml-9  grow flex">Quantity</div>
          <div class="ml-16  grow flex">Total</div>
        </div>
        <div class="">
          <div class="bg-slate-100 shadow-xl shadow-zinc-700 border-l border-b border-gray-200 border-r md:grid md:grid-cols-6 gap-16 sm:grid sm:grid-cols-6 lg:grid lg:grid-cols-6">
            <div class="flex border-b border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-0 justify-center">
              <img
                class="sm:top-4 md:top-4 w-32 max-h-44 lg:h-32 lg:w-40 sm:w-24 px-1 my-1 sm:h-24 md:h-24 md:w-24"
                src="https://images.unsplash.com/photo-1662751663172-89b0c02f7505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              ></img>
            </div>
            <div class="flex grow col-span-2 font-bold border-b px-1 py-4 border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-0 justify-between">
              <h1 class="flex text-center sm:hidden text-xl lg:hidden md:hidden">
                Product:
              </h1>
              <h1 class="flex text-red-500 lg:text-2xl text-xl truncate text-start">
                Black printed cofee mug
              </h1>
            </div>
            <div class="flex font-bold border-b px-1 py-4 border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-0 justify-between">
              <h1 class="flex text-center sm:hidden text-xl lg:hidden md:hidden">
                Price:
              </h1>
              <h1 class="flex text-center text-xl">$13</h1>
            </div>
            <div class="flex font-bold border-b py-2 px-1 border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-0 justify-between">
              <h1 class="flex text-center sm:hidden text-xl lg:hidden md:hidden">
                Quantity
              </h1>
              <input class="flex text-center border border-gray-400 outline-1 w-12 h-10 rounded-sm"></input>
            </div>
            <div class="flex font-bold border-b py-4 px-1 border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-0 justify-between">
              <h1 class="flex text-center sm:hidden text-xl lg:hidden md:hidden">
                Subtotal:
              </h1>
              <h1 class="flex text-center text-xl">$134</h1>
              <button class="p-1 h-10 bg-red-600 text-white border shadow-zinc-700 shadow-md">
                Remove
              </button>
            </div>
          </div>
          <div class="flex flex-col border-l lg:flex-row bg-slate-100 border-b border-gray-200 p-2 justify-between">
            <div class="flex space-x-4 overflow-hidden justify-starrt">
              <input
                placeholder="Coupon code"
                class="w-1/5 border shadow-zinc-700 shadow-md p-2 border-gray-500"
              />
              <button class="m-1 bg-lime-400 text-white shadow-zinc-700 border shadow-md">
                Apply coupon
              </button>
            </div>
            <button class="mt-2 lg:mt-0 py-2 bg-red-200 text-gray-400 border shadow-md">
              Update cart
            </button>
          </div>

          <div class="flex justify-end">
            <div class="font-semibold shadow-xl shadow-zinc-700 w-full md:w-3/5 lg:w-2/5 border m-4">
              <h1 class="border-b p-2">Cart totals</h1>
              <div class="p-4">
                <div class="flex p-2 border-b justify-between">
                  <h2>Subtotal</h2>
                  <h2>$13</h2>
                </div>
                <div class="flex p-2 border-b justify-between">
                  <h2>Total</h2>
                  <h2>$138</h2>
                </div>
              </div>
              <div class="p-3">
                <button class="rounded-sm w-full px-4 mt-2 lg:mt-0 py-2 bg-red-500 text-white border shadow-xl">
                  Proceed to checkoutt
                </button>
              </div>
            </div>
          </div>
        </div>
        <Link to="/page">
          <button className="rounded-lg bg-teal-400 text-xl p-2 shadow-xl shadow-zinc-600 font-semibold">
            Home
          </button>
        </Link>
      </div>
    </>
  );
}
export default CartPage;
