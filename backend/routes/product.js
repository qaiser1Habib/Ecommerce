const express = require("express");
const { fetchAllProduct, createProduct, updateProduct, deleteProduct } = require("../controller/product");

const router = express.Router();
router.get("/", fetchAllProduct).post("/", createProduct).patch("/", updateProduct).delete("/", deleteProduct);

exports.router = router;
