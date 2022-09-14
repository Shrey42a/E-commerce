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
      <div className="bg-slate-200 justify-center flex">
        <div className="bg-white shadow-md shadow-zinc-600 mb-4 max-w-min lg:max-w-7xl sm:max-w-md w-full md:max-w-3xl mt-2 p-6">
          <h1 className="sm:text-left md:text-left lg:text-center font-bold text-3xl text-slate-400 -mb-8">
            @42Shopping
          </h1>
          <div className="flex mt-8 sm:justify-center flex-col sm:flex-col md:flex-row lg:flex-row lg:justify-between">
            <input
              spellCheck="true"
              value={query}
              onChange={handleChange}
              className="p-2 bg-slate-100 outline-0 rounded-lg shadow-md shadow-zinc-400"
              placeholder="Search"
              type="text"
            ></input>

            <select
              value={sort}
              onChange={handleSortChange}
              className="w-48 mx-auto lg:w-48 shadow-zinc-400 shadow-md outline-0 border rounded-md pr-2 pl-2 m-2"
            >
              <option value="default" className="text-sm p-2 font-semibold">
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

          <div className="text-xl mt-4 flex items-center space-x-2">
            <button className="font-bold button">1</button>
            <button className="font-bold button">2</button>
            <button className="font-bold button">3</button>
          </div>

          <div className="flex mb-2 mt-4 items-center justify-center p-2">
            <Social />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
