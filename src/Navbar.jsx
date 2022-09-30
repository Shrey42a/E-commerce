import React from "react";
import { Link } from "react-router-dom";

function Navbar({ productCount }) {
  return (
    <>
      <div>
        <nav className="navbar gradient">
          <div className="flex flex-col-rev">
            <div>
              <img
                src="src/Logo1.svg"
                className="border-transparent h-24 w-40 scale-125 hover:scale-150 rounded-full"
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
                  <Link to="/about">
                    <h1>About</h1>
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <h1>Login</h1>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <h1>Contact</h1>
                  </Link>
                </li>
                <li>
                  <Link to="/cart">
                    <h1>Cart</h1>
                  </Link>
                </li>
              </ul>
              <Link to="/cart"><div className="flex">
                
                  <svg className="bg15" xmlns="http://www.w3.org/2000/svg" width="48" height="56" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#1c1c1c"></path> </svg>
                
                <span className="w-2 -mt-3 font-semibold text-gray-900">
                  {productCount}
                </span>
              </div></Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
