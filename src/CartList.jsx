import React, {useState, useEffect}  from "react";
import { Link } from "react-router-dom";
import CartRow from "./CartRow";
import EmptyCart from "./EmptyCart";

function CartList({ cart, updateCart, product}) {

  const [localCart, setLocalCart] = useState(cart);

  useEffect(function () {
    setLocalCart(cart);
  }, [cart]);

  function handleRemove(productId) {
    const newCart = {...cart}
    delete newCart[productId]
    updateCart(newCart);
  }

  function handleChange(productId, newValue) {
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
      <div className="justify-around hidden p-5 text-xl font-bold text-gray-700 bg-transparent border border-gray-400 lg:grid lg:grid-cols-6">
          <div></div>
          <div className=""></div>
          <div className="-ml-28">Product</div>
          <div className="flex ml-2 grow">Price</div>
          <div className="flex grow">Quantity</div>
          <div className="flex ml-2 grow">Total</div>
      </div>

      {product.length > 0 && product.map(function (items){
        return (
            <CartRow key={items.id} onRemove={handleRemove} onChange={handleChange} quantity={localCart[items.id]} product={product} {...items} ></CartRow>
      );
          })}
      
      <div className="flex flex-col justify-between px-3 bg-transparent lg:flex-row">
          <div className="flex items-center justify-start w-full space-x-2 overflow-hidden">
            <input
              placeholder="Coupon code"
              className="w-1/2 h-10 p-1 bg-transparent border border-gray-400 lg:w-1/3"
            />
            <button className="h-10 p-2 m-1 text-white border border-gray-400 shadow b23">
              Apply coupon
            </button>
        </div>
        <div className="flex items-center justify-end w-full">
          <button onClick={updateMyCart} className="w-full h-10 px-2 mt-2 font-bold text-white border border-gray-600 shadow lg:w-1/4 b23 lg:mt-0">
            Update cart
          </button></div>
      </div>
      <div className="flex justify-end">
          <div className="w-full m-4 font-semibold border border-gray-400 lg:w-1/3">
            <h1 className="p-2 border-b border-gray-400">Cart totals</h1>
            <div className="p-4">
              <div className="flex justify-between p-2 border-b border-gray-400">
                <h2>Subtotal</h2>
                <h2>$13</h2>
              </div>
              <div className="flex justify-between p-2 border-b border-gray-400">
                <h2>Total</h2>
                <h2>$138</h2>
              </div>
            </div>
            <div className="p-3">
              <Link to="/checkout"><button className="w-full px-1 py-2 mt-2 text-sm text-white border border-gray-400 rounded-sm shadow b23 lg:text-lg lg:mt-0">
                Proceed to checkoutt
              </button></Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link to="/page">
            <button className="button3">Home</button>
          </Link>
        </div>
    </>  
  );
}
export default CartList;
