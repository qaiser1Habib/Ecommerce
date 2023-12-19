const express = require("express");
const mongoose = require("mongoose");
const productsRouter = require("./routes/product.js");
const userRouter = require("./routes/user.js");
const cartRouter = require("./routes/cart.js");
const orderRouter = require("./routes/order.js");
const categoryRouter = require("./routes/category.js");
const brandRouter = require("./routes/brand.js");
const whishListRouter = require("./routes/wishlist.js");
const paymentRouter = require("./routes/payment.js");
require("dotenv").config();
require("./utils/constants.js");
const cors = require("cors");
const path = require("path");

const app = express();

//middlewares
app.use(express.static(path.resolve(__dirname, "build")));
app.use(express.json());
app.use(
	cors({
		exposedHeaders: ["X-Total-Count"],
	})
);

app.use("/products", productsRouter.router);
app.use("/category", categoryRouter.router);
app.use("/brand", brandRouter.router);
app.use("/user", userRouter.router);
app.use("/cart", cartRouter.router);
app.use("/wishlist", whishListRouter.router);
app.use("/order", orderRouter.router);
// app.use("/payments", paymentRouter.router);

main().catch((err) => console.log(err));

async function main() {
	await mongoose.connect(process.env.MONGO_DB_CONNECTION_URL);
	console.log("database connected");
}
app.listen(process.env.PORT || 3000, () => {
	console.log(`Example app listening on port ${process.env.PORT}`);
});
