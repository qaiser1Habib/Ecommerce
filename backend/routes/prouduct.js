const express = require("express");
const { fetchAllProduct, createProduct } = require("../controller/product");

const router = express.Router();
router.get("/", fetchAllProduct).post("/", createProduct);

exports.router = router;
