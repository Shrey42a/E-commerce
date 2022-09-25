import React, { memo } from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <>
      <div className="flex py-20 lg:py-32 items-center bg-center justify-center bg-[url(https://r4.wallpaperflare.com/wallpaper/920/268/922/5bd0c1d7ce120-wallpaper-70d04539fff6ee03f8bfd7d65bd63428.jpg)] h-max grow bg-cover">
        <div className="h-96 w-full lg:w-1/2 space-y-4 bg10 flex-col flex justify-center items-center">
        
        <div className="text-9xl">
            <div className="space-y-4">
              <div className="bg10 h-28 w-48 pt-6">
            <div className="error">404</div></div>
            <h1 className="info">FILE NOT FOUND</h1>
          </div>
          </div>
          <Link title="Homepage" to="/page">
          <button className="btnn bg10">Go Home</button>
        </Link>
          </div>
      </div>
    </>
  );
}
const BetterError404 = memo(Error404);
export default BetterError404;
