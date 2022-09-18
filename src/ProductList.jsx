import React from "react";
import TeamCard from "./TeamCard";

function ProductList({ products }) {
  return (
    <>
      <div className="justify-center flex flex-wrap p-2 mt-8">
        {products.map(function (item) {
          return (
            <>
              <TeamCard key={item.title} {...item}></TeamCard>
            </>
          );
        })}
      </div>
    </>
  );
}
export default ProductList;
