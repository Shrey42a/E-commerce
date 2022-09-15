import React from "react";
import Card from "./Card";
import Social from "./Social";

function Mainpage() {
  return (
    <>
      <div className="flex flex-col items-center p-2 bg-cover bg-pic3 sm:h-max md:h-max lg:h-screen h-max">
        <div>
          <Card />
        </div>
        <Social />
      </div>
    </>
  );
}
export default Mainpage;
