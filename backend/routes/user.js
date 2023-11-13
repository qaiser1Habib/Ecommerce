const express = require("express");
const { register, login, updateUser } = require("../controller/user");

const router = express.Router();
router.post("/", register).post("/login", login).patch("/", updateUser);

exports.router = router;
