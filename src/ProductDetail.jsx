import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductData } from "./Api";
import Social from "./Social";
import Error2 from "./Error2"
import NewLoading from "./NewLoading";

function ProductDetail({ onAddToCart }) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(
    function () {
      const p = getProductData(id);
      p.then(function (response) {
        setProduct(response.data);
        setLoading(false);
      });
      p.catch(function (error) {
        setLoading(false);
        return <Error2 />;
      })
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

  if (loading) {
    return (
      <>
        <NewLoading />
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-center bg-fixed gradient4 lg:h-screen">
        <div className="flex justify-center p-4">
          <div className="flex flex-col p-2 shadow-sm bg10 shadow-zinc-700 h-max lg:flex-row md:flex-row lg:w-3/4">
            <div className="flex w-full p-4 h-3/5 lg:w-1/2">
              <img
                className="w-full shadow-sm h-80 lg:h-96 lg:w-full shadow-zinc-700 md:h-full sm:h-full"
                src={product.thumbnail}
              ></img>
              <div className="flex items-center justify-center w-16 h-16 p-4 mr-12 -mt-2 -ml-10 bg-red-500 rounded-full shadow-md animate-pulse shadow-zinc-700">
                <h1 className="font-bold text-center">Sale!</h1>
              </div>
            </div>
            <div className="w-3/4 mt-4 ml-4">
              <h3 className="text-black text-md">{product.category}</h3>
              <h1 className="text-3xl font-semibold text-red-500 lg:text-4xl md:text-3xl sm:text-2xl">
                {product.title}
              </h1>
              <p className="text-lg text-black lg:text-2xl sm:text-lg md:text-xl md:overflow-hidden">
                {product.description}
              </p>
              <h1 className="mt-2 text-xl font-semibold text-black">
                Rating {product.rating}
              </h1>
              <div>
                <h2 className="mt-2 text-xl font-bold lg:text-xl text-slate-800 md:text-lg sm:text-md">
                  Discount {product.discountPercentage}%
                </h2>
                <h1 className="mt-2 text-xl font-bold lg:text-4xl text-slate-800 md:text-4xl sm:text-3xl">
                  $ {product.price}
                </h1>
              </div>
              <h1 className="mt-2 font-semibold text-black">
                Stock {product.stock}
              </h1>
              <h1 className="font-semibold text-black truncate">
                Brand "{product.brand}"
              </h1>
              <div className="flex mt-2 space-x-2">
                <input
                  onChange={handleCountChange}
                  value={count}
                  type="number"
                  className="w-12 px-2 text-2xl text-center rounded-full shadow-sm shadow-zinc-600 bg-slate-200"
                ></input>
                <button data-mdb-ripple="true" data-mdb-ripple-color="light" data-mdb-ripple-duration="1000ms" onClick={handleButtonClick} className="shadow-sm shadow-zinc-600 button3">
                  Add to cart
                </button>
              </div>
              <div className="flex items-center mt-2 space-x-4">
                <button className="shadow-sm button3 shadow-zinc-600">Buy Now</button>
                <Link title="Products" to="/page">
                  <button className="p-2 px-3 py-1 text-lg font-semibold text-white bg-gray-400 rounded-lg shadow-sm button3 shadow-zinc-700 hover:bg-gray-600 outline-0">
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
              <button className="px-3 py-1 mb-2 text-lg font-semibold text-black rounded-lg shadow-sm button3 outline-0 shadow-zinc-700">
                Prev
              </button>
            </Link>
          )}

          <Social />

          {id < 100 && (
            <Link title="Next" to={"/productdetail/" + (id + 1)}>
              <button className="px-3 py-1 mb-2 text-lg font-semibold text-black rounded-lg shadow-sm outline-0 button3 text-md shadow-zinc-700">
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
