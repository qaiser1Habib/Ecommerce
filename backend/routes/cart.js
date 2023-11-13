const express = require("express");
const { fetchCartByUser, addToCart, removeFromCart, updateCartItem } = require("../controller/cart");

const router = express.Router();
router.post("/", addToCart).get("/", fetchCartByUser).delete("/", removeFromCart).patch("/", updateCartItem);

exports.router = router;
