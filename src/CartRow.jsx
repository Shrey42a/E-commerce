import React, {useState, useEffect}  from "react";
import { getProductData } from "./Api";
import { ImCross } from "react-icons/im";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";

function CartRow({ cart, updateCart }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
   const [localCart, setLocalCart] = useState(cart);
  const productIds = Object.keys(cart);

  function updateMyCart() {
    updateCart(localCart);
  }

  useEffect(function () {
    setLocalCart(cart);
  }, [cart]);

  useEffect(function () {
    const productPromises = productIds.map(function (id) {
      return getProductData(id);
    });
    Promise.all(productPromises).then(function (products) {
      setProducts(products);
      setLoading(false);
    });
  }, [cart]);

  function handleRemove(event) {
    const productId = event.currentTarget.getAttribute("productid")
    console.log("crosss button called", productId);
 
    const newCart = {...cart}
    delete newCart[productId]
    updateCart(newCart);
    setLoading(true);
  }

  function handleChange(event) {
    const newValue = +event.target.value;
    const productId = event.target.getAttribute("productId");
    const newLocalcart = { ...localCart, [productId]: newValue };
    setLocalCart(newLocalcart);
  }

  if (products == "") {
    return (
      <>
        <EmptyCart></EmptyCart>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center h-screen p-4 grow bg-slate-200">
          <div className="loader2"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="justify-around shadow-md shadow-zinc-700 hidden p-5 text-xl font-bold text-gray-700 border border-t lg:grid lg:grid-cols-6 bg-slate-200">
          <div></div>
          <div className=""></div>
          <div className="-ml-28">Product</div>
          <div className="flex ml-2 grow">Price</div>
          <div className="flex grow">Quantity</div>
          <div className="flex ml-2 grow">Total</div>
      </div>
      <div className="bg-transparent">
        {products.map(function (p) {
          return (
            <div className="bg-gray-200 shadow-md shadow-zinc-700 border mb-2">
              <button productid={p.data.id} onClick={handleRemove} className="m-6"><ImCross /></button>
          <div key={p.data.id} className="border-b border-l border-r border-gray-200 bg-gray-200 md:grid md:grid-cols-6 sm:grid sm:grid-cols-6 lg:grid lg:grid-cols-6">
          <div className="flex justify-center items-center border-b border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-none">
            <img
              className="px-1 my-1 sm:top-4 md:top-4 w-68 h-40 lg:h-48 lg:w-48 sm:w-24 sm:h-24 md:h-24 md:w-24" src={p.data.thumbnail}
            ></img>
          </div>
          <div className="flex justify-between items-center col-span-2 px-1 py-4 font-bold border-b border-t-none border-gray-400 grow md:border-b-0 sm:border-b-0 lg:border-b-0">
            <h1 className="flex text-center sm:hidden lg:text-xl lg:hidden md:hidden">
              Product:
            </h1>
            <h1 className="flex text-red-500 lg:text-xl text-start">
              {p.data.title}
            </h1>
          </div>
          <div className="flex justify-between items-center px-1 py-4 font-bold border-b border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-0">
            <h1 className="flex text-center sm:hidden lg:text-xl lg:hidden md:hidden">
              Price:
            </h1>
            <h1 className="flex text-center lg:text-xl">${p.data.price}</h1>
          </div>
          <div className="flex justify-between items-center px-1 py-2 font-bold border-b border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-0">
            <h1 className="flex text-center sm:hidden lg:text-xl lg:hidden md:hidden">
              Quantity
            </h1>
                  <input
                    productId={p.data.id}
                    onChange={handleChange}
                    type="number"
                    value={localCart[p.data.id]}
                    className="flex w-12 h-8 text-center border border-gray-400 rounded-sm outline-1" />
          </div>
          <div className="flex justify-between items-center px-1 py-4 font-bold border-b border-gray-400 md:border-b-0 sm:border-b-0 lg:border-b-0">
            <h1 className="flex text-center sm:hidden lg:text-xl lg:hidden md:hidden">
              Subtotal:
            </h1>
              <h1 className="flex text-center lg:text-xl">${p.data.price}</h1>
            
          </div>
              </div>
            </div>
          );
        })} 
      </div>
      <div className="flex shadow-md shadow-zinc-700 flex-col justify-between p-2 border-b border-l border-gray-200 lg:flex-row bg-slate-100">
          <div className="flex justify-start space-x-4 overflow-hidden">
            <input
              placeholder="Coupon code"
              className="w-1/5 px-2 border border-gray-500 shadow-md shadow-zinc-700 -py-2"
            />
            <button className="p-2 m-1 text-white border shadow-md bg-lime-400 shadow-zinc-700">
              Apply coupon
            </button>
          </div>
          <button onClick={updateMyCart} className="px-2 py-2 mt-2 text-gray-400 bg-red-500 border shadow-md lg:mt-0">
            Update cart
          </button>
      </div>
      <div className="flex justify-end">
          <div className="w-full m-4 font-semibold border shadow-md shadow-zinc-700 md:w-3/5 lg:w-2/5">
            <h1 className="p-2 border-b">Cart totals</h1>
            <div className="p-4">
              <div className="flex justify-between p-2 border-b">
                <h2>Subtotal</h2>
                <h2>$13</h2>
              </div>
              <div className="flex justify-between p-2 border-b">
                <h2>Total</h2>
                <h2>$138</h2>
              </div>
            </div>
            <div className="p-3">
              <button className="w-full px-4 py-2 mt-2 text-white bg-red-500 border rounded-sm shadow-xl lg:mt-0">
                Proceed to checkoutt
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link to="/page">
            <button className="btnn">Home</button>
          </Link>
        </div>
    </>
  );
}
export default CartRow;
