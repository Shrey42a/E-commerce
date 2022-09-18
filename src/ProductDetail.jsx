import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductData } from "./Api";
import Social from "./Social";

function ProductDetail({ onAddToCart }) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      const p = getProductData(id);
      p.then(function (response) {
        setProduct(response.data);
      });
    },
    [id]
  );

  function handleCountChange(event) {
    setCount(+event.target.value);
  }
  function handleButtonClick() {
    onAddToCart(+id, +count);
    console.log("product id", id, "count", count);
  }

  if (!product) {
    return (
      <>
        <div className="flex items-center justify-center h-screen p-4 grow bg-slate-200">
          <div className="loader2"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-center bg-no-repeat bg-cover bg-pic17 lg:h-screen">
        <div className="flex justify-center p-4">
          <div className="flex flex-col p-2 shadow-md bg9 shadow-zinc-700 h-max lg:flex-row md:flex-row lg:w-3/4">
            <div className="flex w-full p-4 h-3/5 lg:w-1/2">
              <img
                className="w-full shadow-md h-80 lg:h-96 lg:w-full shadow-zinc-700 md:h-full sm:h-full"
                src={product.thumbnail}
              ></img>
              <div className="flex items-center justify-center w-16 h-16 p-4 mr-12 -mt-2 -ml-10 bg-red-500 rounded-full shadow-xl animate-pulse shadow-zinc-700">
                <h1 className="font-bold text-center">Sale!</h1>
              </div>
            </div>
            <div className="w-3/4 mt-4 ml-4">
              <h3 className="text-white text-md">{product.category}</h3>
              <h1 className="text-3xl font-semibold text-red-500 lg:text-4xl md:text-3xl sm:text-2xl">
                {product.title}
              </h1>
              <p className="text-lg text-white lg:text-2xl sm:text-lg md:text-xl md:overflow-hidden">
                {product.description}
              </p>
              <h1 className="mt-2 text-xl font-semibold text-white">
                Rating {product.rating}
              </h1>
              <div>
                <h2 className="mt-2 text-xl font-bold lg:text-xl text-slate-200 md:text-lg sm:text-md">
                  Discount {product.discountPercentage}%
                </h2>
                <h1 className="mt-2 text-xl font-bold lg:text-4xl text-slate-100 md:text-4xl sm:text-3xl">
                  $ {product.price}
                </h1>
              </div>
              <h1 className="mt-2 font-semibold text-white">
                Stock {product.stock}
              </h1>
              <h1 className="font-semibold text-white truncate">
                Brand "{product.brand}"
              </h1>
              <div className="flex mt-2 space-x-2">
                <input
                  onChange={handleCountChange}
                  value={count}
                  type="number"
                  className="w-20 px-2 text-2xl text-center rounded-lg shadow-md shadow-zinc-600 bg-slate-200"
                ></input>
                <button onClick={handleButtonClick} className="btnn">
                  Add to cart
                </button>
              </div>
              <div className="flex items-center mt-2 space-x-4">
                <button className="btnn">Buy Now</button>
                <Link title="Products" to="/page">
                  <button className="p-2 px-3 py-1 text-lg font-semibold text-white rounded-lg shadow-md bg-lime-500 hover:bg-lime-600 shadow-zinc-700 outline-0">
                    Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around p-2 mt-2 space-x-2">
          {id > 1 && (
            <Link title="Prev" to={"/productdetail/" + (id - 1)}>
              <button className="px-3 py-1 mb-2 text-lg font-semibold text-white rounded-lg shadow-md bg9 hover:bg10 shadow-zinc-700 outline-0">
                Prev
              </button>
            </Link>
          )}

          <Social />

          {id < 100 && (
            <Link title="Next" to={"/productdetail/" + (id + 1)}>
              <button className="px-3 py-1 mb-2 text-lg font-semibold text-white rounded-lg shadow-md hover:bg10 bg9 text-md shadow-zinc-700 outline-0">
                Next
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
export default ProductDetail;
