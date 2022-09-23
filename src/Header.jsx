import React, { memo } from "react";

function Header() {
  return (
    <>
      <div>
        <section className="bgimage" id="home">
          <div className="container-fluid"></div>
        </section>
      </div>
    </>
  );
}
const BetterHeader = memo(Header);
export default BetterHeader;
