const express = require("express");
const { register, login, updateUser, getUser, getUserImage } = require("../controller/user");
const { jwtAuthentication } = require("../middlewares/authentications/jwtAuthentication.js");
const multerMiddleware = require("../middlewares/storage/multerMiddleware.js");

const router = express.Router();
router
	.post("/signup", register)
	.post("/", login)
	.get("/", jwtAuthentication, getUser)
	.get("/image", getUserImage)
	.patch("/", jwtAuthentication, multerMiddleware(), updateUser);

exports.router = router;
