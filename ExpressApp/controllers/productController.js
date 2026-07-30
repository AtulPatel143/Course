const express = require("express");
const products = require("../productData");

function createProduct(req, res) {
  products.push(req.body);
  res.json(products);
}
function getProducts(req, res) {
  res.json(products);
}
function updateProduct(req, res) {
  const id = Number(req.params.id);

  const selectedProduct = products[id];

  if (!selectedProduct) {
    return res.status(404).send("product not found");
  }

  products[id] = req.body;

  res.json(products);
}
function deleteProduct(req, res) {
  const id = Number(req.params.id);

  const selectedProduct = products[id];

  if (!selectedProduct) {
    return res.status(404).send("product not found");
  }

  products.splice(id, 1);

  res.json(products);
}

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
