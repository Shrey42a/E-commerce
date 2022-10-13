import React from "react";
import TeamCard from "./TeamCard";

function ProductList({ products }) {
  return (
    <>
      <div className="flex flex-wrap justify-center p-2 mt-8 overflow-hidden">
        {products.map(function (item) {
          return (
              <TeamCard key={item.id} {...item}></TeamCard>
          );
        })}
      </div>
    </>
  );
}
export default ProductList;
