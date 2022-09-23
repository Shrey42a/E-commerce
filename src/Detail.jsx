import React from "react";

function Detail({ details }) {
  return (
    <>
      <div>
        {details.map(function (item) {
          return (
            <>
              <ProductDetail
                key={item.title}
                pic={item.pic}
                title2={item.title2}
                mrp={item.mrp}
                mrp2={item.mrp2}
              ></ProductDetail>
            </>
          );
        })}
      </div>
    </>
  );
}
export default Detail;
