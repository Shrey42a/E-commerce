import React from "react";
import { Link } from "react-router-dom";
import { withUser } from "./withProvider";

function Navbar({ productCount, setUser, user }) {

  function handleLogout() {
    localStorage.removeItem("token")
    setUser(undefined);
  }

  return (
    <>
      <div>
        <nav className="navbar bg42">
          <div className="flex flex-col-rev">
            <div>
              <img
                alt="..."
                src="https://cdn.discordapp.com/attachments/933654325127938101/1028275924665380914/Sat_8_10_2022_17_30_27.png"
                className="w-40 h-24 scale-125 border-transparent rounded-full hover:scale-150"
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
                {user && <li>
                  <Link to="/page">
                    <h1>Home</h1>
                  </Link>
                </li>}
                {user && <li>
                   <Link to="/about">
                    <h1>About</h1>
                  </Link>
                </li>}
                {!user && <li>
                  <Link to="/login">
                    <h1>login</h1>
                  </Link>
                </li>}
                {user && <li>
                  <Link to="/contact">
                    <h1>Contact</h1>
                  </Link>
                </li> }
                <li>
                  {user && <Link to="/cart">
                    <h1>Cart</h1>
                  </Link>}
                </li>
                <li>{user && <button className="p-1 text-black rounded-lg shadow-sm bg10 shadow-zinc-400" onClick={handleLogout}>Logout</button>}</li>
              </ul>
              <Link to="/cart"><div className="flex">
                
                  <svg className="bg15 bi bi-cart3" xmlns="http://www.w3.org/2000/svg" width="48" height="56" fill="currentColor" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#1c1c1c"></path> </svg>
                
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
export default withUser(Navbar);
