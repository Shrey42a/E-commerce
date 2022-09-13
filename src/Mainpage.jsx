import React from "react";
import Card from "./Card";
import Social from "./Social";

function Mainpage() {
  return (
    <>
      <div className="gradient items-center sm:h-max md:h-max lg:h-screen h-max flex flex-col p-2">
        <div className="circle">
          <h1 data-text="TAP" className="tracking-widest text">
            TAP
          </h1>
        </div>
        <div>
          <Card />
        </div>
        <Social />
      </div>
    </>
  );
}
export default Mainpage;
