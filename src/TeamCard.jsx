import React from 'react';
import { Link } from "react-router-dom";

function TeamCard({thumbnail, rating, stock, brand, category, title, discountPercentage, price, id}) {
  return (

       <Link to={"/productdetail/" + id}><div>
        <div className="ease-in-out outline outline-transparent hover:-translate-y-1 hover:scale-100 duration-100 bg-white shrink shadow-md shadow-zinc-800 overflow-hidden w-80 m-2 rounded-md">
          <div className="flex max-w-xs">
            <div className="w-full aspect-square">
         <img className="h-full w-full object-cover" src={thumbnail}></img></div>
            <div className="bg-red-500 shadow-xl shadow-zinc-700 -ml-10 -mt-2 -mr-4 h-12 w-12 flex justify-center rounded-full items-center">
    <h1 className="text-center text-lg font-bold">Sale!</h1>
</div>
          </div>
         <h3 className="text-slate-400 text-sm ml-2">{category}</h3>
         <h1 className="font-bold ml-2 truncate text-2xl">{title}</h1>
         <div className="flex ml-2">
           <h1 className="font-semibold text-lg">Rating {rating}</h1>
         </div>
          <div className="flex justify-between">
            <div className="">
         <h2 className="font-semibold text-lg decoration-2 ml-2">Discount {discountPercentage}%</h2><h3 className="text-black text-lg font-semibold ml-2">$ {price}</h3>
              <h1 className="text-black font-semibold text-sm ml-2">Stock {stock}</h1>
              <div className="flex flex-col">
              <h1 className="text-black truncate text-lg overflow-hidden font-semibold ml-2">Brand "{brand}"</h1></div>
            </div>
          <div className="flex flex-col">
          <button className="rounded-lg shadow-lg shadow-zinc-600 text-center text-slate-600 font-semibold text-lg hover:bg-lime-500 bg-lime-400 mr-6 p-2 w-16 h-10">Buy</button></div>
          </div>
        </div>
         </div></Link>
    );
}

export default TeamCard;