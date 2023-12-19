const express = require("express");
const { fetchAllCategories, createCategory } = require("../controller/category");
const { jwtAuthentication } = require("../middlewares/authentications/jwtAuthentication.js");

const router = express.Router();
router.get("/", fetchAllCategories).post("/", jwtAuthentication, createCategory);

exports.router = router;
