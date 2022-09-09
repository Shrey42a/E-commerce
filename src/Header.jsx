import React from "react";

function Header({ productCount }) {
  return(
    <>
      <div className="bg-white">
        <div className="flex justify-between">
          <a className="cursor-default" href="https://www.amazon.in"><img src="https://pngimg.com/uploads/amazon/small/amazon_PNG21.png" className="img h-16 md:h-12 cursor-pointer lg:h-16 lg:ml-20 ml-8"></img></a>
          <div className="flex flex-col">
          <img className="h-12 cursor-pointer mr-8 my-auto lg:h-12" src="https://cdn-icons-png.flaticon.com/512/70/70021.png"></img><span className="span w-2 font-bold text-red-700 -mt-6 ml-4">{productCount}</span></div>
        </div>
      </div>
    </>
  );
}
export default Header;