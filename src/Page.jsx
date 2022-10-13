import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { getProductListm } from "./Api";
import Nothing from "./Nothing";
import Social from "./Social";
import { range } from "lodash";
import { useSearchParams, Link } from "react-router-dom";

function Page() {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchparams = Object.fromEntries([...searchParams]);
  let { query, sort, page } = searchparams;

   page = +page || 1;
   query = query || "";
   sort = sort || "default";

  useEffect(function () {
    let sortType;
    let sortBy;

    if (sort == "name") {
      sortBy = "title";
    } else if (sort == "price") {
      sortBy = "price";
    } else if (sort == "price2") {
      sortBy = "price";
      sortType = "desc";
    }

    getProductListm(sortBy, query, page, sortType).then(function (Wdata) {
      setProductData(Wdata);
      console.log("data");
      setLoading(false);
    });
  }, [sort, query, page]);

  function handleChange(event) {
    setSearchParams({ ...searchparams, query: event.target.value, page: 1 },
    {replace: false});
  }

  function handleSortChange(event) {
    setSearchParams({ ...searchparams, sort: event.target.value },
    {replace: false});
  }

  if (loading) {
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
      <div className="flex justify-center p-2 gradient2">
        <div className="w-full p-6 mt-6 mb-4 shadow-md bg-fixed bg12 shadow-zinc-600 max-w-min lg:max-w-7xl sm:max-w-md md:max-w-3xl">
          <h1 className="-mb-8 text-3xl font-bold text-center sm:text-left md:text-left lg:text-center text-slate-700">
            @42Shopping
          </h1>
          <div className="flex flex-col items-center justify-center mt-8 sm:justify-center sm:flex-col md:flex-row lg:flex-row lg:justify-between">
            <input
              spellCheck="true"
              value={query}
              onChange={handleChange}
              className="w-1/2 p-2 rounded-lg shadow-md bg-slate-100 outline-0 shadow-zinc-400"
              placeholder="Search"
              type="text"
            ></input>

            <select
              value={sort}
              onChange={handleSortChange}
              className="w-48 pl-2 pr-2 m-2 mx-auto border rounded-md shadow-md lg:w-48 shadow-zinc-400 outline-0"
            >
              <option value="default" className="p-2 text-sm font-semibold">
                Default sorting
              </option>
              <option value="name" className="text-sm font-semibold">
                Sort by name
              </option>
              <option value="price" className="text-sm font-semibold">
                Sort by price: Low to High
              </option>
              <option value="price2" className="text-sm font-semibold">
                Sort by price: High to Low
              </option>
            </select>
          </div>

          {productData.data.length > 0 && <ProductList products={productData.data} />}
          {productData.data.length == 0 && <Nothing></Nothing>}

          {range(1, productData.meta.last_page + 1).map((Pgnum) => (
            <Link key={Pgnum} to={"?" + new URLSearchParams({ ...searchparams, page: Pgnum })}><button className={"font-bold mx-2 button " + (Pgnum == page ? "bg-lime-400": "bg-teal-500")}>{Pgnum}</button></Link>
          ))};

          <div className="flex items-center justify-center p-2 mt-4 mb-2">
            <Social />
          </div>
        </div>
      </div>
    </>
  );
}
export default Page;
