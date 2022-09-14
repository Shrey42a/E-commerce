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
  }

  if (!product) {
    return (
      <>
        <div className="p-4 grow h-screen bg-slate-200 flex justify-center items-center">
          <div className="loader2"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-slate-200 lg:h-screen justify-center flex-col flex">
        <div className="flex bg-slate-200 justify-center p-4">
          <div className="bg-white shadow-md shadow-zinc-700 h-max p-2 flex lg:flex-row md:flex-row flex-col lg:w-3/4">
            <div className="p-4 flex h-3/5 lg:w-1/2 w-full">
              <img
                className="shadow-md h-80 w-full lg:h-96 lg:w-full shadow-zinc-700 md:h-full sm:h-full"
                src={product.thumbnail}
              ></img>
              <div className="bg-red-500 shadow-xl animate-pulse shadow-zinc-700 mr-12 -ml-10 -mt-2 h-16 w-16 p-4 flex justify-center rounded-full items-center">
                <h1 className="text-center font-bold">Sale!</h1>
              </div>
            </div>
            <div className="ml-4 mt-4 w-3/4">
              <h3 className="text-slate-400 text-md">{product.category}</h3>
              <h1 className="lg:text-4xl text-3xl md:text-3xl sm:text-2xl font-semibold">
                {product.title}
              </h1>
              <p className="lg:text-2xl text-lg sm:text-lg md:text-xl md:overflow-hidden">
                {product.description}
              </p>
              <h1 className="font-semibold text-xl mt-2">
                Rating {product.rating}
              </h1>
              <div>
                <h2 className="lg:text-xl mt-2 text-slate-500 text-xl md:text-lg sm:text-md font-bold">
                  Discount {product.discountPercentage}%
                </h2>
                <h1 className="lg:text-4xl mt-2 text-slate-900 text-xl md:text-4xl sm:text-3xl font-bold">
                  $ {product.price}
                </h1>
              </div>
              <h1 className="text-black mt-2 font-semibold">
                Stock {product.stock}
              </h1>
              <h1 className="text-black truncate font-semibold">
                Brand "{product.brand}"
              </h1>
              <div className="space-x-2 flex mt-2">
                <input
                  onChange={handleCountChange}
                  value={count}
                  type="number"
                  className="w-20 rounded-lg text-2xl shadow-md shadow-zinc-600 bg-slate-200 px-2 text-center"
                ></input>
                <button
                  onClick={handleButtonClick}
                  className="bg-red-500 text-white px-4 font-semibold hover:bg-red-600 p-2 rounded-lg shadow-md shadow-zinc-700 outline-0"
                >
                  Add to cart
                </button>
              </div>
              <div className="flex mt-2 space-x-4 items-center">
                <button className="bg-lime-500 text-white px-4 font-semibold hover:bg-lime-600 p-2 rounded-lg shadow-md shadow-zinc-700 outline-0">
                  Buy Now
                </button>
                <Link title="Products" to="/page">
                  <button className="bg-lime-500 text-white px-3 py-1 p-2 font-semibold text-lg hover:bg-lime-600 rounded-lg shadow-md shadow-zinc-700 outline-0">
                    Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-2 space-x-2 items-center justify-around p-2">
          {id > 1 && (
            <Link title="Prev" to={"/productdetail/" + (id - 1)}>
              <button className="bg-lime-500 text-white mb-2 font-semibold hover:bg-lime-600 rounded-lg px-3 py-1 shadow-md text-lg shadow-zinc-700 outline-0">
                Prev
              </button>
            </Link>
          )}

          <Social />

          {id < 100 && (
            <Link title="Next" to={"/productdetail/" + (id + 1)}>
              <button className="bg-lime-500 text-white px-3 py-1 mb-2 text-lg font-semibold text-md hover:bg-lime-600 rounded-lg shadow-md shadow-zinc-700 outline-0">
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
