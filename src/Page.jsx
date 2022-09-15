import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { getProductListm } from "./Api";
import Nothing from "./Nothing";
import Social from "./Social";

function Page() {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(function () {
    const t = getProductListm();

    t.then(function (ddata) {
      setProductList(ddata.data.products);
    });
  }, []);

  let data = productList.filter(function (item) {
    return item.title.toLowerCase().indexOf(query.toLowerCase()) != -1;
  });

  if (sort == "price") {
    data = data.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "name") {
    data = data.sort(function (x, y) {
      return x.title < y.title ? -1 : 1;
    });
  } else if (sort == "price2") {
    data = data.sort(function (x, y) {
      return y.price - x.price;
    });
  } else if (sort == "rating") {
    data = data.sort(function (x, y) {
      return y.rating - x.rating;
    });
  } else if (sort == "discountPercentage") {
    data = data.sort(function (x, y) {
      return y.discountPercentage - x.discountPercentage;
    });
  }

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  return (
    <>
      <div className="flex justify-center p-2 bg-slate-100">
        <div className="w-full p-6 mt-6 mb-4 bg-white shadow-md shadow-zinc-600 max-w-min lg:max-w-7xl sm:max-w-md md:max-w-3xl">
          <h1 className="-mb-8 text-3xl font-bold sm:text-left md:text-left lg:text-center text-slate-400">
            @42Shopping
          </h1>
          <div className="flex flex-col mt-8 sm:justify-center sm:flex-col md:flex-row lg:flex-row lg:justify-between">
            <input
              spellCheck="true"
              value={query}
              onChange={handleChange}
              className="p-2 rounded-lg shadow-md bg-slate-100 outline-0 shadow-zinc-400"
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
              <option value="rating" className="text-sm font-semibold">
                Sort by rating
              </option>
              <option
                value="discountPercentage"
                className="text-sm font-semibold"
              >
                Sort by discount
              </option>
              <option value="price" className="text-sm font-semibold">
                Sort by price: Low to High
              </option>
              <option value="price2" className="text-sm font-semibold">
                Sort by price: High to Low
              </option>
            </select>
          </div>

          {data.length > 0 && <ProductList products={data} />}
          {data.length == 0 && <Nothing></Nothing>}

          <div className="flex items-center mt-4 space-x-2 text-xl">
            <button className="font-bold button">1</button>
            <button className="font-bold button">2</button>
            <button className="font-bold button">3</button>
          </div>

          <div className="flex items-center justify-center p-2 mt-4 mb-2">
            <Social />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
