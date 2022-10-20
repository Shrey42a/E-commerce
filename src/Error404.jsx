import React, { memo } from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <>
      <div className="flex py-20 lg:py-32 items-center justify-center gradient4 h-max grow">
        <div className="h-96 w-full lg:w-1/2 space-y-4 bg10 flex-col flex justify-center items-center">
        
        <div className="text-9xl">
            <div className="space-y-4">
              <div className="bg10 h-28 w-48 pt-6">
            <div className="error">404</div></div>
            <h1 className="info">FILE NOT FOUND</h1>
          </div>
          </div>
          <Link title="Homepage" to="/page">
          <button className="button3">Go Home</button>
        </Link>
          </div>
      </div>
    </>
  );
}
const BetterError404 = memo(Error404);
export default BetterError404;
