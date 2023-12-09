const express = require("express");
const { createOrder, OrdersByUser, fetchAllOrders, orderUpdate } = require("../controller/order");
const { jwtAuthentication } = require("../middlewares/authentications/jwtAuthentication.js");

const router = express.Router();
router
	.post("/", jwtAuthentication, createOrder)
	.get("/own", jwtAuthentication, OrdersByUser)
	.get("/", jwtAuthentication, fetchAllOrders)
	.patch("/", jwtAuthentication, orderUpdate);

exports.router = router;
