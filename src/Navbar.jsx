import React from "react";
import { Link } from "react-router-dom";

function Navbar({ productCount }) {
  return (
    <>
      <nav className="flex items-center justify-between w-full border-b border-slate-600">
        <div>
          <ul className="menu2">
            <li className="logo2">
              <img
                className="w-12 h-12 mt-2 rounded-full shadow-xl hover:outline hover:outline-lime-100 shadow-zinc-800"
                src="https://img.freepik.com/free-psd/luxury-beauty-logo-mockup_4513-551.jpg?size=626&ext=jpg&ga=GA1.2.1229558507.1646104130"
              ></img>
            </li>
            <li className="item2">
              <Link to="/page">Home</Link>
            </li>
            <li className="item2">
              <a href="#">About</a>
            </li>
            <li className="item2">
              <a href="#">Contact</a>
            </li>

            <li className="toggle2">
              <a href="#">
                <i className="fas fa-bars"></i>
              </a>
            </li>
          </ul>
        </div>
        <Link to="/login">
          <button className="btnn text-lg lg:hidden">Log in</button>
        </Link>
        <div className="flex items-center">
          <li className="item2 bg9 button2">
            <Link to="/login">Sign Up</Link>
          </li>
        </div>
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
      </nav>
    </>
  );
}
export default Navbar;
