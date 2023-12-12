import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products";
import authReducer from "./auth";
import cartReducer from "./cart";
import orderReducer from "./order";
import userReducer from "./user";
import categoriesReducer from "./categories";
import brandReducer from "./brand";

export const store = configureStore({
	reducer: {
		product: productReducer,
		auth: authReducer,
		cart: cartReducer,
		order: orderReducer,
		user: userReducer,
		category: categoriesReducer,
		brand: brandReducer,
	},
});
