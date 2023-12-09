import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product";
import orderReducer from "./orders";
import authReducer from "./auth";
import userReducer from "./user";

const store = configureStore({
	reducer: { product: productReducer, order: orderReducer, auth: authReducer, user: userReducer },
});

export default store;
