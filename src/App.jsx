import React, { useState } from "react";
import Page from "./Page";
import ProductDetail from "./ProductDetail";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import Footer from "./Footer";
import Error404 from "./Error404";
import CartPage from "./CartPage";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
import Forget from "./Forget";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Loggeduser from "./Loggeduser";
import Authuser from "./Authuser";
import Alerts from "./Alerts";
import Checkout from "./Checkout";
import UserProvider from "./Providers/UserProvider";
import AlertProvider from "./Providers/AlertProvider";
import CartProvider from "./Providers/CartProvider";

function App() {

  return (
    <>
      <div>
        <UserProvider>
          <CartProvider>
        <AlertProvider>
        <Navbar />
            <Header />
            <Alerts />
        <div className="grow">
          <Routes>
            <Route index element={<Loggeduser><Mainpage /></Loggeduser>}></Route>
            <Route path="/login" element={<Authuser><Login /></Authuser>}></Route>
            <Route path="/signup" element={<Authuser><Signup /></Authuser>}></Route>
            <Route path="/page" element={<Loggeduser><Page /></Loggeduser>}></Route>
            <Route path="/about" element={<Loggeduser><About /></Loggeduser>}></Route>
            <Route path="/checkout" element={<Loggeduser><Checkout /></Loggeduser>}></Route>
            <Route path="/contact" element={<Loggeduser><Contact /></Loggeduser>}></Route>
            <Route path="/forget" element={<Authuser><Forget /></Authuser>}></Route>
            <Route path="/cart" element={<Loggeduser><CartPage /></Loggeduser>}></Route>
            <Route path="*" element={<Error404 />}></Route>
            <Route
              path="/productdetail/:id"
              element={<Loggeduser><ProductDetail /></Loggeduser>}
            ></Route>
          </Routes>
        </div>
          <Footer />
            </AlertProvider>
            </CartProvider>
          </UserProvider>
      </div>
    </>
  );
}

export default App;
