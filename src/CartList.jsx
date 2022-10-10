import React, {useState, useEffect}  from "react";
import { Link } from "react-router-dom";
import CartRow from "./CartRow";
import EmptyCart from "./EmptyCart";

function CartList({ cart, updateCart, product }) {

  const [localCart, setLocalCart] = useState(cart);
  useEffect(function () {
    setLocalCart(cart);
  }, [cart]);

  function handleRemove(productId) {
    console.log("crosss button called", productId);
 
    const newCart = {...cart}
    delete newCart[productId]
    updateCart(newCart);
  }

  function handleChange(productId, newValue ) {
    const newLocalcart = { ...localCart, [productId]: newValue };
    setLocalCart(newLocalcart);
  }

  function updateMyCart() {
    updateCart(localCart);
  }

   if (product == "") {
    return (
      <>
        <EmptyCart></EmptyCart>
      </>
    );
  }

  return (
    <>  
      <div className="justify-around hidden p-5 text-xl font-bold text-gray-700 border border-t shadow-md shadow-zinc-700 lg:grid lg:grid-cols-6 bg-slate-200">
          <div></div>
          <div className=""></div>
          <div className="-ml-28">Product</div>
          <div className="flex ml-2 grow">Price</div>
          <div className="flex grow">Quantity</div>
          <div className="flex ml-2 grow">Total</div>
      </div>


      {product.map(function (item) {
        return (
            <CartRow onRemove={handleRemove} product={product} onChange={handleChange} quantity={localCart[item.id]} {...item} ></CartRow>
      );
          })}

      
      <div className="flex flex-col justify-between p-2 border-b border-l border-gray-200 shadow-md shadow-zinc-700 lg:flex-row bg-slate-100">
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
export default CartList;
