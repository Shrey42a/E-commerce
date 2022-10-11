import React, { memo } from "react";
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
      <div className="m-2 overflow-hidden rounded-md shadow-md bg10 outline outline-transparent shrink shadow-zinc-800 w-60 lg:w-80">
        <div className="flex max-w-xs">
          <div className="w-full overflow-hidden aspect-square">
            <img className="object-cover w-full h-full transition duration-300 ease-in-out hover:scale-125" src={thumbnail}></img>
          </div>
          <div className="flex items-center justify-center w-12 h-12 -mt-2 -ml-10 -mr-4 bg-red-500 rounded-full shadow-xl shadow-zinc-700">
            <h1 className="text-lg font-bold text-center">Sale!</h1>
          </div>
        </div>
        <div className="flex items-center justify-between">
        <div>
        <h3 className="ml-2 text-sm text-slate-600">{category}</h3>
        <h1 className="ml-2 text-2xl font-bold text-red-500 truncate">
          {title}
        </h1>
        <div className="flex ml-2">
          <h1 className="text-lg text-gray-600">Rating {rating}</h1>
        </div>
        <div className="flex flex-col justify-between">
            <h2 className="ml-2 text-lg text-gray-600 decoration-2">
              Discount {discountPercentage}%
            </h2>
            <h3 className="ml-2 text-lg font-semibold text-gray-600">$ {price}</h3>
            <h1 className="ml-2 text-sm text-gray-600">Stock {stock}</h1>
            <div className="flex flex-col">
              <h1 className="ml-2 overflow-hidden text-lg font-semibold text-gray-600 truncate">
                Brand "{brand}"
              </h1>
            </div>
          </div>
          </div>
          <div className="flex items-baseline mt-20 mr-8">
            <button className="w-16 h-10 p-2 text-lg font-semibold text-center rounded-lg shadow-lg shadow-zinc-600 text-slate-600 hover:bg-lime-500 bg-lime-400">
              Buy
            </button>
          </div>
          </div>
      </div>
    </Link>
  );
}
const BetterTeamCard = memo(TeamCard);
export default BetterTeamCard;
