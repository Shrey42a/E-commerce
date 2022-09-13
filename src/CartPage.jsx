import React from "react";
import { Link } from "react-router-dom";
import CartRow from "./CartRow";

function CartPage() {
  return (
    <>
      <div class="">
        <div class="lg:grid border-t font-bold text-gray-700 lg:grid-cols-6 hidden justify-around text-xl bg-slate-100 border p-5">
          <div></div>
          <div></div>
          <div class="-ml-20">Product</div>
          <div class="ml-7  grow flex">Price</div>
          <div class="ml-9  grow flex">Quantity</div>
          <div class="ml-16  grow flex">Total</div>
        </div>
        <div class="mb-1">
          <CartRow />
        </div>

        <div class="flex flex-col border-l lg:flex-row bg-slate-100 border-b border-gray-200 p-2 justify-between">
          <div class="flex space-x-4 overflow-hidden justify-start">
            <input
              placeholder="Coupon code"
              class="w-1/5 border shadow-zinc-700 -py-2 shadow-md px-2 border-gray-500"
            />
            <button class="m-1 p-2 bg-lime-400 text-white shadow-zinc-700 border shadow-md">
              Apply coupon
            </button>
          </div>
          <button class="mt-2 px-2 lg:mt-0 py-2 bg-red-200 text-gray-400 border shadow-md">
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
        <div className="flex justify-center items-center">
          <Link to="/page">
            <button className="rounded-lg bg-teal-400 text-xl p-2 shadow-xl shadow-zinc-600 font-semibold">
              Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default CartPage;
