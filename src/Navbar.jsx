import React from "react";
import { Link } from "react-router-dom";
import { withCart, withUser } from "./withProvider";

function Navbar({ totalCount, setUser, user }) {

  function handleLogout() {
    localStorage.removeItem("token")
    setUser(undefined);
  }

  return (
    <>
      <div>
        <nav className="bg49 navbar">
          <div className="flex flex-col-rev">
            <div>
              <img
                alt="..."
                src="https://media.discordapp.net/attachments/933654325127938101/1029717959393943632/IMG_20221012_165911-removebg-preview.png"
                className="h-20 scale-125 border-transparent rounded-full w-28 hover:scale-150"
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
              <ul className="-mt-6 menu-items lis">
                <li><img className="w-16 h-16 lg:hidden" src="https://media.discordapp.net/attachments/933654325127938101/1029717959393943632/IMG_20221012_165911-removebg-preview.png"></img></li>
                {user && <li>
                  <Link to="/page">
                    <button className="h-8 p-1 -mt-4 text-black rounded-lg button3 bg10">Home</button>
                  </Link>
                </li>}
                {user && <li>
                   <Link to="/about">
                    <button className="h-8 p-1 -mt-4 text-black rounded-lg button3 bg10">About</button>
                  </Link>
                </li>}
                {!user && <li>
                  <Link to="/login">
                    <button className="h-8 p-1 -mt-4 text-black rounded-lg button3 bg10">Login</button>
                  </Link>
                </li>}
                {user && <li>
                  <Link to="/contact">
                   <button className="h-8 p-1 -mt-4 text-black rounded-lg button3 bg10">Contact</button>
                  </Link>
                </li> }
                <li>
                  {user && <Link to="/cart">
                    <button className="h-8 p-1 -mt-4 text-black rounded-lg button3 bg10">Cart</button>
                  </Link>}
                </li>
                <li>{user && <button className="h-8 p-1 text-black rounded-lg button3 bg10" onClick={handleLogout}>Logout</button>}</li>
              </ul>
              <Link to="/cart"><div className="hidden bg15 lg:block">
                
                  <svg className="bi bi-cart3" xmlns="http://www.w3.org/2000/svg" width="48" height="56" fill="currentColor" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#1c1c1c"></path> </svg>
                
                <span className="w-2 -mt-20 font-semibold text-gray-900">
                  {totalCount}
                </span>
              </div></Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default withUser(withCart(Navbar));
