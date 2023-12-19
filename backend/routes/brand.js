const express = require("express");
const { fetchAllBrands, createBrand } = require("../controller/brand");
const { jwtAuthentication } = require("../middlewares/authentications/jwtAuthentication.js");

const router = express.Router();
router.get("/", fetchAllBrands).post("/", jwtAuthentication, createBrand);

exports.router = router;
