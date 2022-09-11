import React, { useState } from "react";
import Page from "./Page";
import ProductDetail from "./ProductDetail";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import Header from "./Header";
import Footer from "./Footer";
import Error404 from "./Error404";
import CartPage from "./CartPage";
//import Error2 from "./Error2";

function App() {
  const [cart, setCart] = useState({});
  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;

    setCart({ ...cart, [productId]: oldCount + count });
  }
  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);
  return (
    <>
      <div className="h-screen">
        <Header productCount={totalCount} />
        <div className="grow">
          <Routes>
            <Route index element={<Mainpage />}></Route>
            <Route path="/page" element={<Page />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
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
