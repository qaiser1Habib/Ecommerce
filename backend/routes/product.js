const express = require("express");
const { fetchAllProduct, createProduct, updateProduct, deleteProduct, getProductImage } = require("../controller/product");
const { jwtAuthentication } = require("../middlewares/authentications/jwtAuthentication.js");
const multerMiddleware = require("../middlewares/storage/multerMiddleware.js");

const router = express.Router();
router
	.get("/", fetchAllProduct)
	.get("/media", getProductImage)
	.post("/", jwtAuthentication, multerMiddleware(), createProduct)
	.patch("/", jwtAuthentication, multerMiddleware(), updateProduct)
	.delete("/", deleteProduct);

exports.router = router;
