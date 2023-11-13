import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products";
import authSlice from "./auth";
import cartSlice from "./cart";
import orderSlice from "./order";
import userSlice from "./user";

export const store = configureStore({
	reducer: {
		product: productReducer,
		auth: authSlice,
		cart: cartSlice,
		order: orderSlice,
		user: userSlice,
	},
});
