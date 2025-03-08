const express = require("express");
const { allproduct } = require("../controller/product.controller");
const productRoute = express.Router();
productRoute.get("/products", allproduct);

module.exports = { productRoute };

