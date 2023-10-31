const express = require("express");
const { fetchAllProduct, createProduct } = require("../controller/product");

const router = express.Router();
//  /products is already added in base path
router.get("/", fetchAllProduct).post("/", createProduct);

exports.router = router;
