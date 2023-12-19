const express = require("express");
const { jwtAuthentication } = require("../middlewares/authentications/jwtAuthentication.js");
const { addToWhishList, fetchWishListByUser, removeFromWishlist } = require("../controller/wishlist.js");

const router = express.Router();
router
	.post("/", jwtAuthentication, addToWhishList)
	.get("/", jwtAuthentication, fetchWishListByUser)
	.delete("/", jwtAuthentication, removeFromWishlist);
// .patch("/", jwtAuthentication, updateCartItem);

exports.router = router;
