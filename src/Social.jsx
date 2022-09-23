import React, { memo } from "react";

function Social() {
  return (
    <>
      <div className="h-10 w-60 bg-gradient-to-l from-cyan-200 via-teal-200 to-white btn_wrap">
        <span className="bg-gradient-to-l from-lime-200 via-emerald-200 to-white">
          Share
        </span>
        <div className="container2">
          <a href="https://facebook.com" target="blank">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a target="blank" href="https://twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a target="blank" href="https://instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
          <a target="blank" href="https://github.com">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </>
  );
}
const BetterSocial = memo(Social);
export default BetterSocial;
