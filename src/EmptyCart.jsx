import React, { memo } from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <>
      <div className="w-full -mt-60">
        <div className="bg-gray-200 border-t-4 border-red-500 p-4 lg:px-48 w-full flex space-x-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="red"
            className="mt-2"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />{" "}
          </svg>
          <h1 className="text-lg">Your cart is currently empty</h1>
        </div>
        <Link to="/page">
          <button className="mt-2 px-10 p-2 font-bold text-lg rounded-md b23">
            Return to shop
          </button>
        </Link>
      </div>
    </>
  );
}
const BetterEmptyCart = memo(EmptyCart);
export default BetterEmptyCart;
