const express = require("express");
const { register, login, updateUser, getUser } = require("../controller/user");

const router = express.Router();
router.post("/signup", register).post("/", login).get("/", getUser).patch("/", updateUser);

exports.router = router;
