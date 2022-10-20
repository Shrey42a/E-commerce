import React from "react";
import { useEffect, useState } from "react";
import { GetCart, getProductDataBulk, SaveCart } from "../Api";
import { withUser } from "../withProvider";
import { CartContext } from "../Contexts";

function CartProvider({ isLoggedIn, children }) {
    const [cart, setCart] = useState([]);

    useEffect(function () {
      if (isLoggedIn) {
          GetCart().then(function (savedcart) {
          setCart(savedcart);
        });
    } else {
       const savedDataString = localStorage.getItem("My-cart") || "{}";
        const savedData = JSON.parse(savedDataString);
        quantityMapToCart(savedData);
    }
    },
      [isLoggedIn]);
  
  function quantityMapToCart(quantityMap) {
    getProductDataBulk(Object.keys(quantityMap)).then(function (products) {
      const savedCart = products.map((p) => ({
        product: p,
        quantity: quantityMap[p.id],
      }));
      setCart(savedCart);
    });
  }
  
  function AddToCart(productId, count) {
    const quantityMap = cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );
    const oldCount = quantityMap[productId] || 0;
    const newCart = { ...quantityMap, [productId]: oldCount + count };
    updateCart(newCart);
  }

    function updateCart(quantityMap) {
    if (isLoggedIn) {
      SaveCart(quantityMap).then(function (response) {
        setCart(response);
        quantityMapToCart(quantityMap);
      });
    } else {
      const quantityMapString = JSON.stringify(quantityMap);
      localStorage.setItem("My-cart", quantityMapString);
      quantityMapToCart(quantityMap);
    }
  }

  const totalCount = cart.reduce(function (previous, current) {
    return previous + current.quantity;
  }, 0);
    
    return (
        <>
    <CartContext.Provider value={{ cart, updateCart, totalCount, AddToCart }}>
     {children}
    </CartContext.Provider>
    </>
    );
}

export default withUser(CartProvider);