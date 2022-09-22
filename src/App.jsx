import React, { useState } from "react";
import Page from "./Page";
import ProductDetail from "./ProductDetail";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import Footer from "./Footer";
import Error404 from "./Error404";
import CartPage2 from "./CartPage2";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
import Forget from "./Forget";
import Header from "./Header";

function App() {
  const savedDataString = localStorage.getItem("My-cart") || "{}";
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);

  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };

    setCart(newCart);

    const cartString = JSON.stringify(newCart);
    localStorage.setItem("My-cart", cartString);
  }

  const totalCount = Object.keys(cart).reduce(function (output, current) {
    return output + cart[current];
  }, 0);
  return (
    <>
      <div>
        <Navbar productCount={totalCount} />
        <Header />
        <div className="grow">
          <Routes>
            <Route index element={<Mainpage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/page" element={<Page />}></Route>
            <Route path="/forget" element={<Forget />}></Route>
            <Route path="/cart" element={<CartPage2 />}></Route>
            <Route path="*" element={<Error404 />}></Route>
            <Route
              path="/productdetail/:id"
              element={<ProductDetail onAddToCart={handleAddToCart} />}
            ></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
