import React from "react";

function Checkout() {
    return (
        <>
        <div class="h-max gradient4 lg:px12 lg:px-20 py-24">
  <div class="border-b-4 border-red-600 mb-2 p-4">
    <h1 class="text-2xl font-semibold">Checkout</h1>
  </div>
  <div class="flex lg:flex-row flex-col w-full justify-between h-full">
  <div class="lg:w-2/3 h-max lg:h-4/5 p-2">
  <div class="p-1 border border-gray-300">
    <h1 class="font-bold text-xl mb-4">Billing details</h1>
    <form class="flex flex-col items-center space-y-2">

      <div class="w-full flex space-x-2 lg:justify-center justify-between">
        <div class="flex flex-col">
          <label>First Name</label>
          <input class="border border-gray-400 p-2 w-full rounded-sm" placeholder="First name"></input>
        </div>
        <div class="flex flex-col">
          <label>Second Name</label>
          <input class="border border-gray-400 p-2 w-full rounded-sm" placeholder="Second name"></input>
        </div>
      </div>

      <div class="w-full lg:ml-32 lg:items-start items-center flex flex-col">
       <label class="mr-44">Company</label>
       <input class="w-4/5 border border-gray-400 p-2" placeholder="Company name"></input>
      </div>

      <div class="w-full lg:ml-32 lg:items-start items-center flex flex-col">
       <label class="mr-44">Country</label>
       <input class="w-4/5 border border-gray-400 p-2" placeholder="Country"></input>
      </div>
       
       <div class="w-full lg:ml-32 lg:items-start items-center flex flex-col">
       <label class="mr-44">Address</label>
       <textarea class="w-4/5 border border-gray-400 p-2" placeholder="Address"></textarea>
      </div>
       
       <div class="w-full lg:ml-32 lg:items-start items-center flex flex-col">
       <label class="mr-40">Town/City</label>
       <input class="w-4/5 border border-gray-400 p-2" placeholder="Town/City"></input>
      </div>
       
       <div class="w-full lg:ml-32 lg:items-start items-center flex flex-col">
       <label class="mr-48">State</label>
       <input class="w-4/5 border border-gray-400 p-2" placeholder="State"></input>
      </div>

      <div class="w-full lg:ml-32 lg:items-start items-center flex flex-col">
       <label class="mr-44">Zip Code</label>
       <input class="w-4/5 border border-gray-400 p-2" placeholder="Zip Code"></input>
      </div>
       
       <div class="w-full lg:ml-32 lg:items-start items-center flex flex-col">
       <label class="mr-48">Phone</label>
       <input class="w-4/5 border border-gray-400 p-2" placeholder="Phone"></input>
      </div>
       
       <div class="w-full lg:ml-32 lg:items-start items-center flex flex-col">
       <label class="mr-48">Email</label>
       <input class="w-4/5 border border-gray-400 p-2" placeholder="Email"></input>
      </div>
    </form>
    <h1 class="text-lg  text-start font-bold m-4">Additional information</h1>
    <div class="flex lg:ml-32 lg:items-start items-center flex-col">
    <textarea class="border-gray-400 border mb-3 w-4/5"></textarea></div>
  </div>
  </div>
  <div class="lg:w-1/3 h-max lg:h-4/5 p-2">
  <div class="border border-gray-300 p-1">
  <h1 class="text-xl font-bold">Your Order</h1>
  <div class="p-4">
    <div class="flex justify-between">
    <h2 class="font-bold">Product</h2>
    <h2 class="font-bold">Subtotal</h2>
    </div>
    <div class="flex justify-between mt-4">
    <h2 class="text-gray-700 font-semibold">Title</h2>
    <h2 class="font-bold text-gray-700">Price $25</h2>
    </div>
    <div class="flex justify-between mt-4">
    <h2 class="text-gray-700 font-semibold">Subtotal</h2>
    <h2 class="font-bold text-gray-700">Price $25</h2>
    </div>
    <div class="flex justify-between mt-4">
    <h2 class="text-gray-700 font-semibold">Total</h2>
    <h2 class="font-bold text-gray-700">Price $25</h2>
    </div>
    <div class="border-t-2 mt-1 border-red-600">
      <div class="flex justify-center space-x-1">
        <h1>SVG</h1>
        <p class="w-4/6 font-semibold text-center lg:text-start text-gray-700"> There is a dofference between sopmething else wfijghhiwer wqrgfwqiuyf rygfwe yewrfyfg sd fy rfwy fy wr ffy wqefywedfwyrgf wrewyfg rf</p>
      </div>
      <div class="flex justify-center mt-8">
      <p class="w-4/5">There is another para where you casn finf hsdbfghjsbfjwhgfwrgh</p></div>
    </div>
    <div class="flex justify-center">
    <button class="p-3 w-full mt-2 rounded-md text-white text-lg font-semibold b23">Place Order</button></div>
  </div>
  </div>
  </div>
  </div>
</div>
        </>
    );
}
export default Checkout;