import axios from "axios";

export function getProductData(id){
  return axios.get("https://dummyjson.com/products/" + id);
}

export function getProductListm(sort, query, page, sortType) {
  let params = {};

  if (sort) {
    params.sortBy = sort;
  }

  if (query) {
    params.search = query;
  }

  if (page) {
    params.page = page;
  }

  if (sortType) {
    params.sortType = sortType;
  }

  return axios.get("https://myeasykart.codeyogi.io/products", {
    params
  }).then(function (response) {
    return response.data;
  });
}