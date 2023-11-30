const express = require("express");
const { register, login, updateUser, getUser } = require("../controller/user");
const { jwtAuthentication } = require("../middlewares/authentications/jwtAuthentication.js");


const router = express.Router();
router.post("/signup", register).post("/", login).get("/",jwtAuthentication, getUser).patch("/",jwtAuthentication, updateUser);

exports.router = router;
