import React, { useState, useEffect } from "react";
import CartList from "./CartList";
import { getProductData } from "./Api";
import NewLoading from "./NewLoading";

function CartPage({ cart, updateCart }) {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  const productId = Object.keys(cart);

  useEffect(function () {
     setLoading(true);
    const productPromises = productId.map(function (id) {
      return getProductData(id);
    });
    Promise.all(productPromises).then(function (product) {
      setProduct(product);
      setLoading(false);
    });
  }, [cart]);
  
  if (loading) {
    return (
      <>
        <NewLoading />
      </>
    );
  }
  return (
    <> 
      <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-12 bg-fixed h-max top-60 gradient4">
        <div className="p-2 m-4 lg:max-w-7xl lg:p-12">
           <CartList cart={cart} product={product} updateCart={updateCart} />
        </div>
      </div>
      
    </>
  );
}
export default CartPage;
