import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-cover bg-pic21">
        <Link title="Homepage" to="/page">
          <button className="btn4">Go Home</button>
        </Link>
        <div className="text-9xl">
          <div className="space-y-4">
            <div className="error">404</div>
            <span className="info">File not found</span>
          </div>
          <img
            src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif"
            className="static"
          />
        </div>
      </div>
    </>
  );
}
export default Error404;
