import React from "react";
import { Link } from "react-router-dom";

function TeamCard({
  thumbnail,
  rating,
  stock,
  brand,
  category,
  title,
  discountPercentage,
  price,
  id,
}) {
  return (
    <Link title="Details" to={"/productdetail/" + id}>
      <div className="overflow-hidden z-index-0">
        <div className="m-2 overflow-hidden bg-white rounded-md shadow-md outline outline-transparent shrink shadow-zinc-800 w-80">
          <div className="flex max-w-xs">
            <div className="w-full aspect-square">
              <img className="object-cover w-full h-full" src={thumbnail}></img>
            </div>
            <div className="flex items-center justify-center w-12 h-12 -mt-2 -ml-10 -mr-4 bg-red-500 rounded-full shadow-xl shadow-zinc-700">
              <h1 className="text-lg font-bold text-center">Sale!</h1>
            </div>
          </div>
          <h3 className="ml-2 text-sm text-slate-400">{category}</h3>
          <h1 className="ml-2 text-2xl font-bold text-red-500 truncate">
            {title}
          </h1>
          <div className="flex ml-2">
            <h1 className="text-lg text-black">Rating {rating}</h1>
          </div>
          <div className="flex justify-between">
            <div className="">
              <h2 className="ml-2 text-lg text-black decoration-2">
                Discount {discountPercentage}%
              </h2>
              <h3 className="ml-2 text-lg font-semibold text-black">
                $ {price}
              </h3>
              <h1 className="ml-2 text-sm text-black">Stock {stock}</h1>
              <div className="flex flex-col">
                <h1 className="ml-2 overflow-hidden text-lg font-semibold text-black truncate">
                  Brand "{brand}"
                </h1>
              </div>
            </div>
            <div className="flex flex-col">
              <button className="w-16 h-10 p-2 mr-6 text-lg font-semibold text-center rounded-lg shadow-lg shadow-zinc-600 text-slate-600 hover:bg-lime-500 bg-lime-400">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TeamCard;
