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
import { useEffect } from "react";
import axios from "axios";
import Loggeduser from "./Loggeduser";
import Authuser from "./Authuser";
import Alerts from "./Alerts";
import { AlertContext, UserContext } from "./Contexts";


function App() {
  const savedDataString = localStorage.getItem("My-cart") || "{}";
  const savedData = JSON.parse(savedDataString);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState();

  const removeAlert = () => {
        setAlert(undefined);
    }

  const token = localStorage.getItem("token");

  
  useEffect(() => {
    if (token) {
      axios.get("https://myeasykart.codeyogi.io/me", {
        headers: {
          Authorization: token,
        },
      }).then((response) => {
        setUser(response.data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
    }, [])
  

  const [cart, setCart] = useState(savedData);
  const [user, setUser] = useState();

  console.log("new in user is ", user);
 

  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    updateCart(newCart);

  }
  
    function updateCart(newCart) {
      setCart(newCart);  
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("My-cart", cartString);
    }
    

  const totalCount = Object.keys(cart).reduce(function (output, current) {
    return output + cart[current];
  }, 0);

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
      <div>
        <UserContext.Provider value={{ user, setUser }}>
          <AlertContext.Provider value={{ alert, setAlert, removeAlert }}>
        <Navbar productCount={totalCount} />
            <Header />
            <Alerts />
        <div className="grow">
          <Routes>
            <Route index element={<Loggeduser><Mainpage /></Loggeduser>}></Route>
            <Route path="/login" element={<Authuser><Login /></Authuser>}></Route>
            <Route path="/signup" element={<Authuser><Signup /></Authuser>}></Route>
            <Route path="/page" element={<Loggeduser><Page /></Loggeduser>}></Route>
            <Route path="/about" element={<Loggeduser><About /></Loggeduser>}></Route>
            <Route path="/contact" element={<Loggeduser><Contact /></Loggeduser>}></Route>
            <Route path="/forget" element={<Authuser><Forget /></Authuser>}></Route>
            <Route path="/cart" element={<Loggeduser><CartPage cart={cart} updateCart={updateCart} /></Loggeduser>}></Route>
            <Route path="*" element={<Error404 />}></Route>
            <Route
              path="/productdetail/:id"
              element={<Loggeduser><ProductDetail onAddToCart={handleAddToCart} /></Loggeduser>}
            ></Route>
          </Routes>
        </div>
            <Footer />
            </AlertContext.Provider>
          </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
