import React, { useState, useEffect } from "react";
import CartList from "./CartList";
import { getProductData } from "./Api";

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
        <div className="flex items-center justify-center h-screen p-4 grow bg-slate-200">
          <div className="loader2"></div>
        </div>
      </>
    );
  }
  return (
    <> 
      
      <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-12 bg-fixed h-max top-60 bg12">
        <div className="p-2 m-4 space-y-4 lg:max-w-7xl lg:p-12">
           <CartList cart={cart} product={product} updateCart={updateCart} />
        </div>
      </div>
      
    </>
  );
}
export default CartPage;
