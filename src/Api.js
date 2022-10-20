import axios from "axios";

export function SaveCart(cart) {
  return axios.post("https://myeasykart.codeyogi.io/carts", + { data: cart }, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  }).then(function (response) {
    return response.data;
  })
}

export function GetCart(cart) {
  return axios.get("https://myeasykart.codeyogi.io/carts", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  }).then(function (response) {
    return response.data;
  })
}

export function getProductData(id) {
  return axios
    .get("https://myeasykart.codeyogi.io/product/" + id)
    .then(function (response) {
      return response.data;
    });
}

export function getProductDataBulk(ids) {
  const commaSeperatedIds = ids.join();
  return axios.get("https://myeasykart.codeyogi.io/products/bulk", {
    params: {
    ids: commaSeperatedIds,
    },
  }).then(function (response) {
    return response.data;
  });
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