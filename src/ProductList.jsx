import React from "react";
import TeamCard from "./TeamCard";

function ProductList({ products }) {
  return (
    <>
      <div className="flex flex-wrap justify-center p-2 mt-8 overflow-hidden">
        {products.map(function (item) {
          return (
            <>
            <div key={item.id}>
            <TeamCard key={item.id} {...item}></TeamCard>
            </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default ProductList;
