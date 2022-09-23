import React, { memo } from "react";

function Footer() {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-3 lg:flex-row lg:justify-around bg-slate-600">
        <h1 className="text-sm font-light text-white">
          Copyright © 2022 | AKKU
        </h1>
        <h1 className="text-sm font-light text-white">
          Powered by Shrey Kumar
        </h1>
      </div>
    </>
  );
}
const BetterFooter = memo(Footer);
export default BetterFooter;
