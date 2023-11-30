const express = require("express");
const mongoose = require("mongoose");
const productsRouter = require("./routes/product.js");
const userRouter = require("./routes/user.js");
const cartRouter = require("./routes/cart.js");
const orderRouter = require("./routes/order.js");
require("./utils/constants.js");
const cors = require("cors");

const app = express();
const port = 3000;

//middlewares
app.use(express.json());
app.use(
	cors({
		exposedHeaders: ["X-Total-Count"],
	})
);

app.use("/products", productsRouter.router);
app.use("/user", userRouter.router);
app.use("/cart", cartRouter.router);
app.use("/order", orderRouter.router);

main().catch((err) => console.log(err));

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
	console.log("database connected");
}

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
