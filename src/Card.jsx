import React, { memo } from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="face face1 bg-gradient-to-l from-cyan-200 via-teal-10 to-white">
            <div className="content glass2">
              <h3 className="bg-transparent">S@42</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <Link title="Products" to="/page" type="button">
                Show List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const BetterCard = memo(Card);

export default BetterCard;
