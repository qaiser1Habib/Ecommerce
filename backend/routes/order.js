const express = require("express");
const { createOrder, OrdersByUser } = require("../controller/order");

const router = express.Router();
router.post("/", createOrder).get("/", OrdersByUser);

exports.router = router;
