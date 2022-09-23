import React from "react";
import { Link } from "react-router-dom";

function Navbar({ productCount }) {
  return (
    <>
      <div>
        <nav className="navbar">
          <div className="flex flex-col-rev">
            <div className="m-4">
              <img
                src="https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="w-10 h-10 rounded-full shadow-xl shadow-zinc-700"
              ></img>
            </div>
            <div className="container navbar-container">
              <input type="checkbox" name="" id="" />
              <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
                <span className="line line4"></span>
              </div>
              <ul className="menu-items">
                <li>
                  <Link to="/page">
                    <h1>Home</h1>
                  </Link>
                </li>
                <li>
                  <a className="cursor-not-allowed">About</a>
                </li>
                <li>
                  <Link to="/login">
                    <h1>Login</h1>
                  </Link>
                </li>
                <li>
                  <a className="cursor-not-allowed">Contact</a>
                </li>
                <li>
                  <Link to="/cart">
                    <h1>Cart</h1>
                  </Link>
                </li>
              </ul>
              <div className="flex">
                <Link to="/cart">
                  <img
                    className="h-12 my-auto mr-8 cursor-pointer lg:h-12"
                    src="https://cdn-icons-png.flaticon.com/512/70/70021.png"
                  ></img>
                </Link>
                <span className="w-2 ml-4 -mt-6 font-bold text-red-700 span">
                  {productCount}
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
