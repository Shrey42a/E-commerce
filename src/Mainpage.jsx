import React, { memo } from "react";
import Card from "./Card";
import Social from "./Social";

function Mainpage() {
  
  return (
    <>
      <div className="flex flex-col items-center p-2 bg-center bg-cover bg-pic26 sm:h-max md:h-max lg:h-screen h-max">
        <div>
          <Card />
        </div>
        <Social />
      </div>
    </>
  );
}
const BetterMainPage = memo(Mainpage);
export default BetterMainPage;
