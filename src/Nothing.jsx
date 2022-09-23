import React, { memo } from "react";

function Nothing() {
  return (
    <>
      <div className="flex items-center justify-center mt-8 grow">
        <div>
          <h1 className="loader-04 grow">o</h1>
        </div>
      </div>
    </>
  );
}
const BetterNothing = memo(Nothing);
export default BetterNothing;
