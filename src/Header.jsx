import React from "react";
import { Link } from "react-router-dom";

function Header({ productCount }) {
  return (
    <>
      <div className="bg-white h-12 border-b border-black">
        <div className="flex justify-end">
          <div className="flex flex-col">
            <Link to="/cart">
              <img
                className="h-12 cursor-pointer mr-8 my-auto lg:h-12"
                src="https://cdn-icons-png.flaticon.com/512/70/70021.png"
              ></img>
            </Link>
            <span className="span w-2 font-bold text-red-700 -mt-6 ml-4">
              {productCount}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
