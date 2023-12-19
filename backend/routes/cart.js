const express = require("express");
const { fetchCartByUser, addToCart, removeFromCart, updateCartItem } = require("../controller/cart");
const { jwtAuthentication } = require("../middlewares/authentications/jwtAuthentication.js");

const router = express.Router();
router
	.post("/", jwtAuthentication, addToCart)
	.get("/", jwtAuthentication, fetchCartByUser)
	.delete("/", jwtAuthentication, removeFromCart)
	.patch("/", jwtAuthentication, updateCartItem);

exports.router = router;
